const menu_data = [
  {
    id: 1,
    hasDropdown: false,
    title: 'Home',
    link: '/'
  },
  {
    id: 2,
    hasDropdown: true,
    title: 'Dịch Vụ',
    link: '/service',
    submenus: [
      { title: 'Service Layout 1', link: '/service' },
      { title: 'Service Layout 2', link: '/service-2' },
      { title: 'Service Layout 3', link: '/service-3' },
      { title: 'Service Layout 4', link: '/service-4' },
      { title: 'Service Details', link: '/service-details' },
    ]
  },
  {
    id: 3,
    title: 'Pages',
    megaMenu: true,
    link: '#',
    pages: true,
    mega_menus: [
      {
        title: 'Page Layout 1', link: '#',
        submenus: [
          { title: 'Portfolio Default', link: '/portfolio' },
          { title: 'Portfolio Grid', link: '/portfolio-grid' },
          { title: 'Portfolio FullWidth', link: '/portfolio-fullwidth' },
          { title: 'Portfolio Masonry', link: '/portfolio-masonry' },
          { title: 'Portfolio Details', link: '/portfolio-details' },
        ]
      },
      {
        title: 'Page Layout 2', link: '#',
        submenus: [
          { title: 'About Us', link: '/about' },
          { title: 'About Me', link: '/about-me' },
          { title: 'Our Team', link: '/team' },
          { title: 'Blog Default', link: '/blog' },
          { title: 'Blog Classic', link: '/blog-classic' },
          { title: 'Blog Left Sidebar', link: '/blog-left-sidebar' },
          { title: 'Blog Right Sidebar', link: '/blog-right-sidebar' },
          { title: 'Blog Details', link: '/blog-details' },
        ]
      },
      {
        title: 'Page Layout 3', link: '#',
        submenus: [
          { title: 'Service Layout 1', link: '/service' },
          { title: 'Service Layout 2', link: '/service-2' },
          { title: 'Service Layout 3', link: '/service-3' },
          { title: 'Service Layout 4', link: '/service-4' },
          { title: 'Service Details', link: '/service-details' },
          { title: 'Testimonial', link: '/testimonial' },
          { title: 'Pricing Table', link: '/pricing' },
          { title: 'Terms & Conditions', link: '/terms-conditions' },
          { title: 'Privacy & Policy', link: '/policy-privacy' },
        ]
      },
      {
        title: 'Page Layout 4', link: '#',
        submenus: [
          { title: 'Sign In', link: '/signin' },
          { title: 'Sign Up', link: '/signup' },
          { title: 'Feedback Form', link: '/client-form' },
          { title: 'FAQs', link: '/faq' },
          { title: 'Contact Layout 1', link: '/contact' },
          { title: 'Contact Layout 2', link: '/contact-2' },
          { title: 'Comming Soon', link: '/comming-soon' },
          { title: 'Error 404', link: '/404' },
        ]
      }
    ]
  },
  {
    id: 4,
    hasDropdown: true,
    title: 'Dự Án',
    link: '/portfolio',
    submenus: [
      { title: 'Portfolio Default', link: '/portfolio' },
      { title: 'Portfolio Grid', link: '/portfolio-grid' },
      { title: 'Portfolio FullWidth', link: '/portfolio-fullwidth' },
      { title: 'Portfolio Masonry', link: '/portfolio-masonry' },
      { title: 'Portfolio Details', link: '/portfolio-details' },
    ]
  },
  {
    id: 5,
    hasDropdown: true,
    title: 'Tin Tức',
    link: '/blog',
    submenus: [
      { title: 'Blog Default', link: '/blog' },
      { title: 'Blog Classic', link: '/blog-classic' },
      { title: 'Blog Left Sidebar', link: '/blog-left-sidebar' },
      { title: 'Blog Right Sidebar', link: '/blog-right-sidebar' },
      { title: 'Blog Details', link: '/blog-details' },
    ]
  },
  {
    id: 6,
    hasDropdown: false,
    title: 'Liên Hệ',
    link: '/contact',
  },
]

export default menu_data;
