import _ from 'lodash';

const data = [
  {
    username: 'jaco',
    role: 'admin'
  },
  {
    username: 'valen',
    role: 'seller'
  },
  {
    username: 'zule',
    role: 'seller'
  },
  {
    username: 'santi',
    role: 'customer'
  },
];

const rta = _.groupBy(data, (i) => i.role);
console.log(rta);

