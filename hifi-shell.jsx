// Shared page shell for sub-pages (nav + content + footer, no tweaks panel)
const SubPageShell = ({ active, label, children }) => {
  const { NavB, Footer } = window;
  return (
    <div data-screen-label={label}>
      <NavB active={active}/>
      {children}
      <Footer/>
    </div>
  );
};
window.SubPageShell = SubPageShell;
