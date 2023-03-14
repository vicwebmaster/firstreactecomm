import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import DataContext from './context/DataContext';

const HeaderCat = () => {
const {cat, subCat} = useContext(DataContext);
  return (
    <>
        {cat && cat.map((x)=>(
        <li>
            <Link className="nav-link has-megamenu">
                <span className="menu-text">{x.name}</span>
            </Link>
            <div className="department-megamenu">
                <div className="department-megamenu-wrap ">
                    <div className="department-submenu">
                        <h3 className="submenu-heading">{x.name}</h3>
                        <ul>
                            {subCat.filter((y)=>{return x.id===y.catid}).map((n)=>(
                                
                            <li><Link to="/shop">{n.name}</Link></li>
                            ))} 
                        </ul>
                    </div>
                </div>
            </div>
        </li>
        ))}
    </>
  )
}

export default HeaderCat