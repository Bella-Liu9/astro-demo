export const routerData = [
  {
    name: `Use ChainX`,
    children: [
      {
        name: `ChainX Wallet`,
        path: `/wallet`,
      },
      {
        name: `Block Scan`,
        path: `/block`,
      },
      {
        name: `Get PCX`,
        path: `/transfer`,
      },
    ],
  },
  {
    name: `Community`,
  },
  {
    name: `Networks`,
    children: [
      {
        name: `ChainX Network`,
        path: `/`,
      },
      {
        name: `SherpaX Network`,
        path: ``,
      },
    ],
  },
  {
    name: `Doc`,
    children: [
      {
        name: `Light paper`,
        path: ``,
      },
      {
        name: `Help`,
        path: ``,
      },
    ],
  },
];
