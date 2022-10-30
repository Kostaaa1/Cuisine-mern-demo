import Pages from './pages/Pages'
import Category from './components/Category'
import Search from './components/Search'
import { BrowserRouter, Link } from 'react-router-dom'
import './styles.css'
import styled from 'styled-components'
import { GiKnifeFork } from 'react-icons/gi'

function App() {
    return (
        <div className="App">
            <div className="container">
                <BrowserRouter>
                    <Nav>
                        <GiKnifeFork/>
                        <Logo to={'/'}>Deliciousss</Logo>
                    </Nav>
                    <Search />
                    <Category />
                    <Pages />
                </BrowserRouter>
            </div>
        </div>
    )
}

const Logo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 100;
    font-family: 'Lobster two', cursive;
    // color: rgb(66,66,66);
    color: white;
    font-style: italic;
`

const Nav = styled.div`
    padding: 1.8rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    svg {
        font-size: 2rem;
        color: white;
        margin-right: 4px;
    }
`

export default App
