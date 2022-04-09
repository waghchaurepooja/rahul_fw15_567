
// function Category()
// {

// }

// export {Category};

// function Category()
// {
//     return (
//         <div>Category</div>
//     )
// }

// export {Category};

// function Category()
// {
//     return (
//         <div>
//             {/* what layout we want */}

//             <img src="" alt="" />
//         </div>
//     )
// }

// export {Category};

// function Category(props)
// {

//     // Child
//     console.log('props:', props)
//     return (
//         <div>
//             {/* what layout we want */}

//             <img src="" alt="" />
//         </div>
//     )
// }

// export {Category};

// function Category(props)
// {

//     // Child
//     console.log('props:', props)
//     return (

//         <div style = {{
//             color : "red",
//             // this is not good way to give class
//         }}>
//             {/* what layout we want */}

//             <img src="" alt="" />
//         </div>
//     )
// }

// export {Category};

// function Category(props)
// {

//     // Child
//     console.log('props:', props)
//     return (

//         <div className="category">
//             {/* what layout we want */}

//             <img src="" alt="" />
//         </div>
//     )
// }

// export {Category};

// function Category(props)
// {
//     // console.log('label:', label)
//     // console.log('image:', image)

//     // Child
//     console.log('props:', props)
//     return (

//         <div className="category">
//             {/* what layout we want */}

//             <img src={props.image} alt="" />
//         </div>
//     )
// }

// export {Category};



import "./category.css"
function Category({image, label})
{
    // console.log('label:', label)
    // console.log('image:', image)

    // Child
    // console.log('props:', props)
    return (

        <div className="category">
            {/* what layout we want */}

            <img src={image} alt="" />
            <b>{label}</b>
        </div>
    )
}

export {Category};