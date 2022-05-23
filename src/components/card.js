import React , { Component }from 'react'
import { ThemeContext } from './ThemeContext'

class Card extends Component {
    static contextType = ThemeContext;
    render() { 
        const {  isLightTheme , light , dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return ( 
            <div>
                <p style={{color: theme.bg}} >Try the new cross-platform PowerShell</p>
            </div>
         );
    }
}
 
export default Card;
