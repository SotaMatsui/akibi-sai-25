export default function ExhibitionsPage() {
  return (
    <div className="xl:flex gap-32">
      <div className="h-screen hidden xl:flex items-center sticky top-0">
        <p className="text-[10rem] font-medium font-display">展示</p>
      </div>
      <p className="xl:hidden text-7xl font-medium font-display py-8">展示</p>
      <div className="xl:min-h-screen flex flex-col items-center justify-center gap-16 py-8 max-w-3xl">
        <section>
          <p>
            展示に関する詳細は、学生の個人情報保護の観点から
            当日受付で配布します。
          </p>
        </section>
      </div>
    </div>
  );
}
