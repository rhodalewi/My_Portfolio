const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className="text-center text-wrap p-6 text-gray-400 text-xs md:text-sm border-t border-gray-800">
        <p> &copy; rhodalewi {year} | Designed & Coded by Rhoda Alewi </p>
    </footer>
  )
}

export default Footer;