import React, { Component } from "react";
import HelpIcon from "../icons/HelpIcon";
import CloseIcon from "../icons/CloseIcon";
import styles from "./NavBar.css";
import PermissionsRequest from "../PermissionsRequest";
import PermissionsGranted from "../PermissionsGranted";
import Button from "../general/Button";
import NotSupported from "../NotSupported";

class NavBar extends Component {
    state = {
        expand: true
    }

    expand = () => {
        this.setState(prevState => ({ expand: !prevState.expand }))
    }

    render() {
        const { expand } = this.state;
        const { hasNotifications, hasPermissions, onRequest } = this.props;
        let component;

        if (hasNotifications) {
            if (hasPermissions) {
                component =  <PermissionsGranted />
            } else {
                component = <PermissionsRequest onClick={onRequest} />
            }

        } else {
            component = <NotSupported />
        }

        return (
            <nav className={styles.NavBar}>
                <section className={styles.Brand}>
                    <p>Remind Me</p>
                </section>

                <section className={styles.NavBarMain}>
                    <li onClick={this.expand} className={styles.NavItem}>
                        <Button>
                            <HelpIcon />
                        </Button>
                    </li>
                </section>
                {expand && 
                    <section className={styles.Details}>
                        <div className={styles.Wrapper}>
                            {component}
                            <Button onClick={this.expand} className={styles.HideMe}>
                                <p>HIDE</p> <CloseIcon />
                            </Button>
                        </div>
                    </section>
                }
            </nav>
        );
    }
}

export default NavBar;