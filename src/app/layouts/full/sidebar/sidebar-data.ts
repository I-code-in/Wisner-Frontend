import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'solar:atom-line-duotone',
    route: '/dashboard',
  },
  {
    displayName: 'Analytics',
    iconName: 'solar:widget-add-line-duotone',
    route: '#',
    chip: true,
    external: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'eCommerce',
    iconName: 'solar:chart-line-duotone',
    route: '#',
    chip: true,
    external: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'CRM',
    iconName: 'solar:screencast-2-line-duotone',
    route: '#',
    chip: true,
    external: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },

  {
    divider: true,
    navCap: 'Apps',
  },
  {
    displayName: 'Chat',
    iconName: 'solar:chat-round-line-line-duotone',
    route: '#',
    chip: true,
    external: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Calendar',
    iconName: 'solar:calendar-mark-line-duotone',
    route: '#',
    chip: true,
    external: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Email',
    iconName: 'solar:letter-line-duotone',
    route: '#',
    chip: true,
    external: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Kanban',
    iconName: 'solar:clapperboard-edit-line-duotone',
    route: '#',
    chip: true,
    external: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Contacts',
    iconName: 'solar:phone-line-duotone',
    route: '#',
    chip: true,
    external: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'ContactsApp',
    iconName: 'solar:phone-line-duotone',
    route: '#',
    chip: true,
    external: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Courses',
    iconName: 'solar:book-bookmark-line-duotone',
    route: '#',
    chip: true,
    external: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Employee',
    iconName: 'solar:user-id-line-duotone',
    route: '#',
    chip: true,
    external: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Notes',
    iconName: 'solar:document-text-line-duotone',
    route: '#',
    chip: true,
    external: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Tickets',
    iconName: 'solar:ticket-sale-line-duotone',
    route: '#',
    chip: true,
    external: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'ToDo',
    iconName: 'solar:airbuds-case-minimalistic-line-duotone',
    route: '#',
    chip: true,
    external: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Invoice',
    iconName: 'solar:bill-list-line-duotone',
    route: '',
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
    children: [
      {
        displayName: 'List',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        chip: true,
        external: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Detail',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        chip: true,
        external: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Create',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        chip: true,
        external: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Edit',
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        chip: true,
        external: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
    ],
  },
  {
    displayName: 'Blog',
    iconName: 'solar:widget-4-line-duotone',
    route: 'apps/blog',
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
    children: [
      {
        displayName: 'Post',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        chip: true,
        external: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Detail',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        chip: true,
        external: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
    ],
  },

  {
    navCap: 'Ui Components',
    divider: true
  },
  {
    displayName: 'Badge',
    iconName: 'solar:archive-minimalistic-line-duotone',
    route: '/ui-components/badge',
  },
  {
    displayName: 'Chips',
    iconName: 'solar:danger-circle-line-duotone',
    route: '/ui-components/chips',
  },
  {
    displayName: 'Lists',
    iconName: 'solar:bookmark-square-minimalistic-line-duotone',
    route: '/ui-components/lists',
  },
  {
    displayName: 'Menu',
    iconName: 'solar:file-text-line-duotone',
    route: '/ui-components/menu',
  },
  {
    displayName: 'Tooltips',
    iconName: 'solar:text-field-focus-line-duotone',
    route: '/ui-components/tooltips',
  },
  {
    displayName: 'Forms',
    iconName: 'solar:file-text-line-duotone',
    route: '/ui-components/forms',
  },
  {
    displayName: 'Tables',
    iconName: 'solar:tablet-line-duotone',
    route: '/ui-components/tables',
  },
  {
    displayName: 'Expansion Panel',
    iconName: 'solar:inbox-archive-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Dialog',
    iconName: 'solar:bolt-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Divider',
    iconName: 'solar:menu-dots-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Paginator',
    iconName: 'solar:tuning-2-bold-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Progress Bar',
    iconName: 'solar:restart-bold-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Progress Spinner',
    iconName: 'solar:refresh-circle-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Ripples',
    iconName: 'solar:branching-paths-up-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Slide Toggle',
    iconName: 'solar:round-alt-arrow-right-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Slider',
    iconName: 'solar:tuning-3-bold-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Snackbar',
    iconName: 'solar:layers-minimalistic-bold-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Tabs',
    iconName: 'solar:box-minimalistic-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Toolbar',
    iconName: 'solar:balloon-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Tooltips',
    iconName: 'solar:feed-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },

  {
    divider: true,
    navCap: 'Pages',
  },
  {
    displayName: 'Roll Base Access',
    iconName: 'solar:lock-password-unlocked-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Treeview',
    iconName: 'solar:bill-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Pricing',
    iconName: 'solar:dollar-minimalistic-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Account Setting',
    iconName: 'solar:accessibility-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'FAQ',
    iconName: 'solar:question-square-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Landingpage',
    iconName: 'solar:layers-minimalistic-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Widgets',
    iconName: 'solar:widget-2-line-duotone',
    route: 'widgets',
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
    children: [
      {
        displayName: 'Cards',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Banners',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Charts',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
    ],
  },

  {
    navCap: 'Extra',
    divider: true
  },
  {
    displayName: 'Icons',
    iconName: 'solar:sticker-smile-circle-2-line-duotone',
    route: '/extra/icons',
  },
  {
    displayName: 'Sample Page',
    iconName: 'solar:planet-3-line-duotone',
    route: '/extra/sample-page',
  },

  {
    divider: true,
    navCap: 'Forms',
  },
  {
    displayName: 'Form elements',
    iconName: 'solar:password-minimalistic-input-line-duotone',
    route: 'forms/forms-elements',
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
    children: [
      {
        displayName: 'Autocomplete',
        subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Button',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Checkbox',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Radio',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Datepicker',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
    ],
  },
  {
    displayName: 'Form Layouts',
    iconName: 'solar:file-text-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Form Horizontal',
    iconName: 'solar:align-horizonta-spacing-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Form Vertical',
    iconName: 'solar:align-vertical-spacing-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Form Wizard',
    iconName: 'solar:archive-minimalistic-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Toastr',
    iconName: 'solar:notification-lines-remove-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },

  {
    divider: true,
    navCap: 'Tables',
  },
  {
    displayName: 'Tables',
    iconName: 'solar:tablet-line-duotone',
    route: 'tables',
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
    children: [
      {
        displayName: 'Basic Table',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Dynamic Table',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Expand Table',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Filterable Table',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Footer Row Table',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'HTTP Table',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Mix Table',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Multi Header Footer',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Pagination Table',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Row Context Table',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Selection Table',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Sortable Table',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Sticky Column',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Sticky Header Footer',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
    ],
  },
  {
    displayName: 'Data table',
    iconName: 'solar:database-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },

  {
    divider: true,
    navCap: 'Chart',
  },
  {
    displayName: 'Line',
    iconName: 'solar:align-top-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Gredient',
    iconName: 'solar:bolt-circle-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Area',
    iconName: 'solar:chart-square-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Candlestick',
    iconName: 'solar:align-left-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Column',
    iconName: 'solar:chart-2-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Doughnut & Pie',
    iconName: 'solar:pie-chart-2-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Radialbar & Radar',
    iconName: 'solar:align-vertical-center-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },

  {
    divider: true,
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'solar:lock-keyhole-minimalistic-line-duotone',
    route: '/authentication',
    children: [
      {
        displayName: 'Login',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/authentication/login',
      },
      {
        displayName: 'Side Login',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
    ],
  },
  {
    displayName: 'Register',
    iconName: 'solar:user-plus-rounded-line-duotone',
    route: '/authentication',
    children: [
      {
        displayName: 'Register',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/authentication/register',
      },
      {
        displayName: 'Side Register',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
    ],
  },
  {
    displayName: 'Forgot Pwd',
    iconName: 'solar:password-outline',
    route: '/authentication',
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
    children: [
      {
        displayName: 'Side Forgot Pwd',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Boxed Forgot Pwd',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
    ],
  },
  {
    displayName: 'Two Steps',
    iconName: 'solar:siderbar-line-duotone',
    route: '/authentication',
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
    children: [
      {
        displayName: 'Side Two Steps',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
      {
        displayName: 'Boxed Two Steps',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '#',
        external: true,
        chip: true,
        chipClass: 'bg-secondary text-white',
        chipContent: 'PRO',
      },
    ],
  },
  {
    displayName: 'Error',
    iconName: 'solar:bug-minimalistic-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  {
    displayName: 'Maintenance',
    iconName: 'solar:settings-line-duotone',
    route: '#',
    external: true,
    chip: true,
    chipClass: 'bg-secondary text-white',
    chipContent: 'PRO',
  },
  
];
