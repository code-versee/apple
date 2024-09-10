import { menuItems } from "../Constants";
import { appleDrawable, bagDrawable, searchDrawable } from "../Utils/utils";
import './Header.css'

export function Header(){
  return (
    <header>
      <nav>
          {appleDrawable}
          <div className="menu">
            <ul>
              {
                menuItems.map(function(item){                  
                  return <li key={item}><a href="/">{item}</a></li>
                })
              }
            </ul>
          </div>
          <div className="icons">
            {searchDrawable}
            {bagDrawable}
          </div>
      </nav>
    </header>
  )
}