import Link from "next/link";

export default function PersistentUrgentIntake({ locale }: { locale: string }) {
  const isZh = locale === "zh";
  const href = isZh
    ? "/zh/services/ecommerce-amazon-defense#urgent-intake"
    : "/services/ecommerce-amazon-defense#urgent-intake";

  return (
    <Link
      href={href}
      className="fixed bottom-4 right-4 z-40 max-w-[calc(100vw-2rem)] rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_12px_35px_rgba(11,29,48,0.32)] transition hover:bg-accent-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:bottom-6 sm:right-6"
      aria-label={isZh ? "前往 Schedule A 紧急咨询表单" : "Go to the urgent Schedule A intake form"}
    >
      {isZh ? "Schedule A 紧急咨询" : "Urgent Schedule A Intake"}
    </Link>
  );
}
