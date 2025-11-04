import HeaderNav from "./HeaderNav";
import Logo from "./Logo";
import SearchBar from "../common/SearchBar";

function Header() {
  return (
    <header className="border-border-subtle bg-surface-alt bg-bg-elevated/80 sticky top-0 z-50 border-b backdrop-blur">
      <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-3 md:px-0">
        <Logo />
        <div className="mx-auto hidden md:block">
          <HeaderNav />
        </div>
        <div className="hidden md:block">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}

export default Header;

// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

// export default function BasicMenu() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         id="basic-button"
//         aria-controls={open ? 'basic-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//       >
//         Dashboard
//       </Button>
//       <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         slotProps={{
//           list: {
//             'aria-labelledby': 'basic-button',
//           },
//         }}
//       >
//         <MenuItem onClick={handleClose}>Profile</MenuItem>
//         <MenuItem onClick={handleClose}>My account</MenuItem>
//         <MenuItem onClick={handleClose}>Logout</MenuItem>
//       </Menu>
//     </div>
//   );
// }
