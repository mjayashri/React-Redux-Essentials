import React,{Component} from 'react';
import {render} from 'react-dom';

const bookList =[
    {"title":"Steve Jobs", "author":"Walter Issacson", "pages":529},
    {"title":"Einstein:His life and Universe", "author":"Walter Issacson", "pages":704},
    {"title":"The Great Gatsby", "author":"F. Scott Fitzgerald", "pages":141}
]

const Book =({title,author,pages,freeBookMark}) =>{
    return(
        <section>
            <h2>{title}</h2>
            <p>by:{author}</p>
            <p>Pages:{pages} pages</p>
            <p>Free Book Mark Today:{freeBookMark?"Yes":"No"}</p>
        </section>
    )
}

const Hiring = ()=>
    <div>
        <p>The Library is hiring.Go to www.library.info/career for info.</p>
    </div>

const NotHiring = ()=>
    <div>
        <p>The Library is not hiring.Come back later for new info.</p>
    </div>


// class Library extends Component{
//     state = {
//         open:false,
//         data:[],
//         loading:true
//     }
//     toggleOpenClosed=()=>{
//         this.setState(prevState =>({
//             open:!prevState.open,
//             freeBookMark:true,
//             hiring:false,
//
//         }))
//     }
//
//     componentDidMount() {
//         this.setState({loading:true})
//         fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1")
//             .then(data =>data.json())
//             .then(data => this.setState({data,loading:false}))
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log("Component is now updated!")
//     }
//
//     render() {
//         const {books} = this.props;
//         return(
//             <div>
//                 {this.state.hiring?<Hiring/>:<NotHiring/>}
//                 {this.state.loading
//                     ?"loading..."
//                     :<div>
//                         {this.state.data.map(product =>{
//                             return(
//                                 <div key={product.id}>
//                                     <h3>Product of the week</h3>
//                                     <h4>{product.name}</h4>
//                                     <img alt={product.name} src={product.image} height={100}/>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 }
//                 <h1>The library is {this.state.open?"open":"close"}</h1>
//                 <button onClick={this.toggleOpenClosed}>Change</button>
//                 {books.map(
//                     (book,i) => <Book
//                         key={i}
//                         title={book.title}
//                         author={book.author}
//                         pages={book.pages}
//                         freeBookMark = {this.state.freeBookMark}/>
//                 )}
//             </div>
//         )
//     }
// }



render(
    <Library books={bookList}/>,
    document.getElementById('root')
);

