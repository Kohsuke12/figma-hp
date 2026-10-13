"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

type ContactModalContextValue = {
  open: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(
  null,
);

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return ctx;
}

const INQUIRY_TYPES = ["サービスについて", "資料請求", "採用について", "その他"];

const inputClass =
  "w-full rounded border border-[#d1d5db] bg-white px-3 py-2.5 text-[14px] text-[#111827] placeholder:text-[#9ca3af] focus:border-[#0a1c36] focus:outline-none focus:ring-1 focus:ring-[#0a1c36]";

function Field({
  label,
  required,
  htmlFor,
  children,
}: {
  label: string;
  required?: boolean;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="flex items-center gap-2 text-[13px] font-bold text-[#111827]"
      >
        {label}
        {required ? (
          <span className="rounded-sm bg-[#0a1c36] px-1.5 py-px text-[10px] font-bold text-white">
            必須
          </span>
        ) : (
          <span className="rounded-sm bg-[#e5e7eb] px-1.5 py-px text-[10px] font-bold text-[#4b5563]">
            任意
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 5L19 19M5 19L19 5"
        stroke="#111827"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ContactForm({ onSubmitted }: { onSubmitted: () => void }) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // 送信先APIは未接続。入力内容の検証はブラウザ標準の required / type で行う。
    onSubmitted();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Field label="お問い合わせ種別" required htmlFor="contact-type">
        <select
          id="contact-type"
          name="type"
          required
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled>
            選択してください
          </option>
          {INQUIRY_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>
      <Field label="会社名" htmlFor="contact-company">
        <input
          id="contact-company"
          name="company"
          autoComplete="organization"
          placeholder="ネクサス株式会社"
          className={inputClass}
        />
      </Field>
      <Field label="お名前" required htmlFor="contact-name">
        <input
          id="contact-name"
          name="name"
          required
          autoComplete="name"
          placeholder="山田 太郎"
          className={inputClass}
        />
      </Field>
      <Field label="メールアドレス" required htmlFor="contact-email">
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="example@nexus.co.jp"
          className={inputClass}
        />
      </Field>
      <Field label="電話番号" htmlFor="contact-tel">
        <input
          id="contact-tel"
          name="tel"
          type="tel"
          autoComplete="tel"
          placeholder="03-1234-5678"
          className={inputClass}
        />
      </Field>
      <Field label="お問い合わせ内容" required htmlFor="contact-message">
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="ご相談内容をご記入ください"
          className={`${inputClass} resize-y`}
        />
      </Field>
      <label className="flex items-start gap-2 text-[13px] text-[#4b5563]">
        <input
          type="checkbox"
          name="agree"
          required
          className="mt-0.5 size-4 accent-[#0a1c36]"
        />
        プライバシーポリシーに同意する
      </label>
      <button
        type="submit"
        className="mt-2 flex w-full items-center justify-center rounded bg-[#0a1c36] px-6 py-3.5"
      >
        <span className="text-[14px] font-bold text-white lg:text-[15px]">
          送信する
        </span>
      </button>
    </form>
  );
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  // 開くたびに key を変えてフォームを初期化する（閉じるアニメーション中は中身を残す）
  const [formKey, setFormKey] = useState(0);

  const open = useCallback(() => {
    setSubmitted(false);
    setFormKey((k) => k + 1);
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, []);

  const close = useCallback(() => {
    dialogRef.current?.close();
    handleClose();
  }, [handleClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    // ESC キー（cancel）など、close() を経由せずに閉じた場合も状態を戻す
    dialog.addEventListener("cancel", handleClose);
    dialog.addEventListener("close", handleClose);
    return () => {
      dialog.removeEventListener("cancel", handleClose);
      dialog.removeEventListener("close", handleClose);
    };
  }, [handleClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) {
      dialog.showModal();
      dialog.scrollTop = 0;
      document.body.style.overflow = "hidden";
    }
  }, [isOpen]);

  return (
    <ContactModalContext.Provider value={{ open }}>
      {children}
      <dialog
        ref={dialogRef}
        onClick={(e) => {
          // 背景（dialog 自身）をクリックしたら閉じる
          if (e.target === e.currentTarget) close();
        }}
        aria-labelledby="contact-modal-title"
        className="m-auto w-[calc(100%-32px)] max-w-[640px] max-h-[calc(100dvh-32px)] overflow-y-auto rounded bg-white p-0 contact-dialog"
      >
        {formKey > 0 && (
          <div
            key={formKey}
            className="flex flex-col gap-6 px-5 py-6 lg:px-10 lg:py-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-heading text-[12px] font-bold text-[#0a1c36] opacity-60">
                  CONTACT
                </span>
                <h2
                  id="contact-modal-title"
                  className="text-[20px] font-bold text-[#0a1c36] lg:text-[24px]"
                >
                  資料請求・お問い合わせ
                </h2>
              </div>
              <button
                type="button"
                aria-label="閉じる"
                onClick={close}
                className="-mr-2 flex items-center justify-center p-2"
              >
                <CloseIcon />
              </button>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-6 text-center">
                <p className="text-[18px] font-bold text-[#0a1c36]">
                  送信が完了しました
                </p>
                <p className="text-[14px] leading-[1.7] text-[#4b5563]">
                  お問い合わせありがとうございます。
                  <br />
                  担当者より2営業日以内にご連絡いたします。
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="mt-2 flex items-center justify-center rounded border border-[#0a1c36] px-8 py-3"
                >
                  <span className="text-[14px] font-bold text-[#0a1c36]">
                    閉じる
                  </span>
                </button>
              </div>
            ) : (
              <ContactForm onSubmitted={() => setSubmitted(true)} />
            )}
          </div>
        )}
      </dialog>
    </ContactModalContext.Provider>
  );
}

export function ContactButton({
  className,
  onClick,
  children,
}: {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  const { open } = useContactModal();
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      onClick={() => {
        onClick?.();
        open();
      }}
      className={className}
    >
      {children}
    </button>
  );
}
