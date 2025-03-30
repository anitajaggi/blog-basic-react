import { NavLink } from "react-router-dom";

export const BlogCard = ({ curElem = [] }) => {
  if (!Array.isArray(curElem) || curElem.length === 0) {
    return <p>No blogs available.</p>;
  }

  return (
    <>
      {curElem.map((curItem, index) => {
        const {
          id,
          photo,
          title,
          author,
          category,
          date,
          shortcontent,
          longcontent,
        } = curItem;

        let slug = curItem.title.toLowerCase().replace(/\s+/g, "-");
        {
          /* let uniqueNumber = Math.floor(1000 + Math.random() * 9000); // Random 4-digit number
        let slug = `${baseSlug}-${uniqueNumber}`; */
        }

        return (
          <div key={index} className="col-6 col-md-3">
            <div className="blog-card">
              <span className="category">{category}</span>
              <div className="blog-img">
                {photo ? (
                  <img src={photo} alt={title || "Blog image"} loading="lazy" />
                ) : (
                  <p>No Image Available</p>
                )}
              </div>
              <div className="blog-card--content mt-2">
                <h5>{title}</h5>
                <p>By {author}</p>
                <p>{shortcontent}</p>
                {/* <NavLink to={`/blogdetails/${curItem._id}`} state={{ curItem }}>
                  <button className="btn btn-secondary rounded-0">
                    Read More
                  </button>
                </NavLink> */}

                <NavLink to={`/blogdetails/${slug}`} state={{ curItem }}>
                  <button className="btn btn-secondary rounded-0">
                    Read More
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
