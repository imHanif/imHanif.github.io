import React,{Component} from "react";
import './main.css';
import {Navbar,Nav,NavDropdown} from "react-bootstrap";


export default class Main extends Component{
    render() {
        return(
            <div>
            <Navbar collapseOnSelect sticky={"top"} expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Shortest Path" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Selection Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Bubble Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Insertion Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Merge Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Quick Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Heap Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Counting Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Radix Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Bucket Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Shell Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Tim Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Comb Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Pigeonhole Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Cycle Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Cocktail Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Strand Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Bitonic Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Binary Insertion Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Gnome Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Sleep Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Stooge Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Tree Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Tag Sort</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Sorting" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Selection Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Bubble Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Insertion Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Merge Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Quick Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Heap Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Counting Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Radix Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Bucket Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Shell Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Tim Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Comb Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Pigeonhole Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Cycle Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Cocktail Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Strand Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Bitonic Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Binary Insertion Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Gnome Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Sleep Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Stooge Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Tree Sort</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Tag Sort</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}
