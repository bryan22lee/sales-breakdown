import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import BellIcon from 'react-bell-icon';
import Icon from 'react-icons-kit';
import {user} from 'react-icons-kit/fa/user'
import { Icon as IconifyIcon } from '@iconify/react';
import threeDotsVertical from '@iconify-icons/bi/three-dots-vertical';

const Styles = styled.div`
  .navbar { background-color: #FFFFFF; } // White
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 0.75em;
    font-weight: bold;
    color: #9FFFCB;
    &:hover { color: white; };
    vertical-align: bottom;
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 55%;
  }
  .button-outline {
    padding: 0;
    border: none;
    background: none;
    vertical-align: bottom;
  }
`;

// Handle clicking on bell notification icon
function notif_button() {
  alert("TO DO: Notifications")
}

// Visual element for the notification icon
var notif_icon = <button class="button-outline" onClick= {() => notif_button()}>
  {/* Can be a moving GIF-style icon by changing animate to true */}
  <BellIcon width='28' active={true} animate={false} />
  </button>;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <div> {/* Top right buttons/icons of the page */}
          {notif_icon}
          &nbsp; &nbsp;
          <button class="button-outline" onClick= {() => alert("TO DO: User profile")}>
            <Navbar.Brand href="/">
              <Icon size={30} icon={user}/>
            </Navbar.Brand>
          </button>
          <button class="button-outline" onClick= {() => alert("TO DO: User profile")}>
            <Navbar.Brand href="/">Ahmed Adley H.<br />
              Super Admin</Navbar.Brand>
          </button>
          <button class="button-outline" onClick= {() => alert("TO DO: Implement 3 dots functionality for something")}>
            <IconifyIcon icon={threeDotsVertical} />
          </button>
        </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)