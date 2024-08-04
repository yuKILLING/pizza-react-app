export default function Footer() {
  return (
    <footer className="bg-footerMainTheme text-white mt-20">
      <div className="w-[1300px] h-[50px] m-auto flex items-center justify-between">
        <p className="font-bold">Сделано с любовью?</p>
        <a href="https://github.com/yuKILLING" target="_blank">
          <img src="/icons/git.svg" alt="Git Icon" className="w-6" />
        </a>
      </div>
    </footer>
  );
}
