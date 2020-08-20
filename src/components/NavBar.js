import React from 'react';
import { Link } from '@reach/router';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import AssessmentIcon from '@material-ui/icons/Assessment';
import TimelineIcon from '@material-ui/icons/Timeline';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    marginBottom: '1%',
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
  menu: {
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    },
  },

  menuButton: {
    paddingRight: theme.spacing(2),
  },
  title: {
    marginLeft: 8,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      className={classes.menu}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to="/">
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <HomeIcon />
          </IconButton>
          <p>Home</p>
        </MenuItem>
      </Link>
      <Link to="leaderboard">
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <AssessmentIcon />
          </IconButton>
          <p>Leaderboard</p>
        </MenuItem>
      </Link>
      <Link to="projects">
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <GitHubIcon />
          </IconButton>
          <p>Projects</p>
        </MenuItem>
      </Link>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Link to="/">
            <div className={classes.logo}>
              <TimelineIcon color="primary" />
              <Typography className={classes.title} variant="h6" noWrap color="textPrimary">
                Semester Long Projects
              </Typography>
            </div>
          </Link>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/">
              <IconButton color="inherit">
                <Typography color="textPrimary">Home</Typography>
              </IconButton>
            </Link>
            <Link to="/leaderboard">
              <IconButton color="inherit">
                <Typography color="textPrimary">Leaderboard</Typography>
              </IconButton>
            </Link>
            <Link to="/projects">
              <IconButton edge="end" color="inherit">
                <Typography color="textPrimary">Projects</Typography>
              </IconButton>
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon color="primary"/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}