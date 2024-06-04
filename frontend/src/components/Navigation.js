'use client'

import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Image from "next/image";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarFooter,
  } from 'cdbreact';
  import { NavLink } from "react-router-dom";


export default function Navigation() {
    return(
        <div>
        <Navbar className="bg-body-tertiary navbar" expand="lg" bg="dark">
            <Container>
                <Navbar.Brand className="app-logo" href="/">
                <Image
                    src="/logo1.jpeg"
                    width={80}
                    height={30}
                    alt="Picture of the author"
                    className="d-inline-block align-center"
                />{' '}
                    Application de Gestion des Etudiants
                </Navbar.Brand>
            </Container>
        </Navbar>


         <CDBSidebar textColor="#333" backgroundColor="#f0f0f0" className="sidebar">
         <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Navigation</CDBSidebarHeader>
         <CDBSidebarContent>
           <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="home">Accueil</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/students" activeClassName="activeClicked">
             <CDBSidebarMenuItem icon="list">Liste d'Etudiants</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/manage" activeClassName="activeClicked">
             <CDBSidebarMenuItem icon="user">Gestion des Etudiants</CDBSidebarMenuItem>
            </NavLink>
             
           </CDBSidebarMenu>
         </CDBSidebarContent>
       </CDBSidebar>
       </div>
    )
}