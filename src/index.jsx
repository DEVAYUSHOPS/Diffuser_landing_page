const Icon = () => {

  const myFunction = () => {
    const navLinks = document.querySelector('#nav-links');
    navLinks.classList.toggle('res-links');
  };

  return (
    <i className="icon md:hidden" onClick={myFunction}>
      <i className="fa fa-bars bg-white"></i>
    </i>
  );
};

export default Icon;