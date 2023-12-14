import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div>
            <h2>Service</h2>

            {['ALL', 'Construction works', 'Finishing work', 'Electrician', 'Plumbing work']
            .map ( category => <Filter category={category} key={category}/>
    )}
        </div>
    )
}

export default AllCategories;