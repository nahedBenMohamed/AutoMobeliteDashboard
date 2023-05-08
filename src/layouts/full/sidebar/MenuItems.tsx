import {IconLayoutDashboard,IconUser,IconCar,
  IconCurrencyDollar,IconList
} from '@tabler/icons-react';


import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    id: uniqueId(),
    title: 'Accounts',
    icon: IconUser,
    href: '/accounts',
  },
  {
    id: uniqueId(),
    title: 'Cars',
    icon: IconCar,
    href: '/car',
  },
  {
    id: uniqueId(),
    title: 'Bilan',
    icon: IconCurrencyDollar,
    href: '/bilan',
  },
  {
  id: uniqueId(),
    title: 'Liste Reservations',
    icon: IconList,
    href: '/listReservation',
},

];

export default Menuitems;
