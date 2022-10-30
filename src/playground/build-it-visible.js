class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
           <h1>Visibility Toggle</h1>
           <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
           {this.state.visibility && (
               <div>
                   <p>These are all the imperative details. The Show details button displays this section on click. The letters on the button change to Hide details. You can click it to hide the details.</p>
               </div>
           )}
           </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// const app = {
//     title: 'Visibility Toggle',
//     detail: 'These are all the imperative details. The Show details button displays this section on click. The letters on the button change to Hide details. You can click it to hide the details.'
// }

// let visibility = false

// const toggleVisibility = () => {
//     visibility = !visibility
//     render()
// }

// const appRoot = document.getElementById('app')

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleVisibility}>{visibility ? 'Hide details' : 'Show details'}</button>
//             {visibility && (
//                 <div>
//                     <p>{app.detail}</p>
//                 </div>
//             )}
//             </div>
//     )
//     ReactDOM.render(template, appRoot)
// }

// render()