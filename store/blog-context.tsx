import { createContext, useState } from "react";
import { BlogEntity } from "../interfaces/Blog";

const BlogContext = createContext({
  blogs: [
    // {
    //   title: "Sample Blog",
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis delectus vitae vel, inventore eius labore. Ipsam saepe maxime rem quae ipsum natus. Cum perferendis, vitae rem, non quod facilis atque voluptatum deleniti eum repellendus, nemo dolor expedita illo maxime dolorum. Magnam magni culpa error sed cumque minus, soluta illo nisi alias quasi explicabo eveniet itaque repellendus inventore corrupti iste! Alias neque adipisci, hic minus est cum nesciunt sapiente, repellat nam ea dolorum saepe qui. Voluptas dolor quae minima nemo obcaecati corporis, fugit earum nihil? Magni eos in ad facere maiores perspiciatis repellendus nesciunt, nostrum commodi sapiente minima aperiam nisi nam a? Quaerat repudiandae dignissimos vitae libero error nam consequatur rem voluptates ut? Voluptate debitis nesciunt quae omnis iste provident adipisci velit? Amet quaerat voluptate necessitatibus facere unde quas ad atque! Dolorem earum ab debitis, temporibus facilis id libero dolorum. Asperiores, perferendis sed! Voluptates repudiandae eius enim fugiat esse officiis nam nobis pariatur eligendi laudantium in vero quos inventore saepe at, accusantium soluta ullam magni magnam sed nemo labore corrupti exercitationem. Ratione optio sed autem culpa fuga temporibus odit voluptate illum velit reprehenderit! Molestias inventore nulla, ipsam veniam, quibusdam quos iusto non voluptas illum laborum necessitatibus repellendus voluptates natus incidunt hic.",
    //   slug: "sample-blog",
    // },
    // {
    //   title: "New Blog",
    //   content:
    //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis delectus vitae vel, inventore eius labore. Ipsam saepe maxime rem quae ipsum natus. Cum perferendis, vitae rem, non quod facilis atque voluptatum deleniti eum repellendus, nemo dolor expedita illo maxime dolorum. Magnam magni culpa error sed cumque minus, soluta illo nisi alias quasi explicabo eveniet itaque repellendus inventore corrupti iste! Alias neque adipisci, hic minus est cum nesciunt sapiente, repellat nam ea dolorum saepe qui. Voluptas dolor quae minima nemo obcaecati corporis, fugit earum nihil? Magni eos in ad facere maiores perspiciatis repellendus nesciunt, nostrum commodi sapiente minima aperiam nisi nam a? Quaerat repudiandae dignissimos vitae libero error nam consequatur rem voluptates ut? Voluptate debitis nesciunt quae omnis iste provident adipisci velit? Amet quaerat voluptate necessitatibus facere unde quas ad atque! Dolorem earum ab debitis, temporibus facilis id libero dolorum. Asperiores, perferendis sed! Voluptates repudiandae eius enim fugiat esse officiis nam nobis pariatur eligendi laudantium in vero quos inventore saepe at, accusantium soluta ullam magni magnam sed nemo labore corrupti exercitationem. Ratione optio sed autem culpa fuga temporibus odit voluptate illum velit reprehenderit! Molestias inventore nulla, ipsam veniam, quibusdam quos iusto non voluptas illum laborum necessitatibus repellendus voluptates natus incidunt hic.",
    //   slug: "new-blog",
    // },
  ],
  addBlog: (blog: BlogEntity): any => {},
});

export function BlogContextProvider(props) {
  const [blogs, setBlogs] = useState<BlogEntity[]>([
    {
      title: "Sample Blog",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis delectus vitae vel, inventore eius labore. Ipsam saepe maxime rem quae ipsum natus. Cum perferendis, vitae rem, non quod facilis atque voluptatum deleniti eum repellendus, nemo dolor expedita illo maxime dolorum. Magnam magni culpa error sed cumque minus, soluta illo nisi alias quasi explicabo eveniet itaque repellendus inventore corrupti iste! Alias neque adipisci, hic minus est cum nesciunt sapiente, repellat nam ea dolorum saepe qui. Voluptas dolor quae minima nemo obcaecati corporis, fugit earum nihil? Magni eos in ad facere maiores perspiciatis repellendus nesciunt, nostrum commodi sapiente minima aperiam nisi nam a? Quaerat repudiandae dignissimos vitae libero error nam consequatur rem voluptates ut? Voluptate debitis nesciunt quae omnis iste provident adipisci velit? Amet quaerat voluptate necessitatibus facere unde quas ad atque! Dolorem earum ab debitis, temporibus facilis id libero dolorum. Asperiores, perferendis sed! Voluptates repudiandae eius enim fugiat esse officiis nam nobis pariatur eligendi laudantium in vero quos inventore saepe at, accusantium soluta ullam magni magnam sed nemo labore corrupti exercitationem. Ratione optio sed autem culpa fuga temporibus odit voluptate illum velit reprehenderit! Molestias inventore nulla, ipsam veniam, quibusdam quos iusto non voluptas illum laborum necessitatibus repellendus voluptates natus incidunt hic.",
      slug: "sample-blog",
    },
    {
      title: "New Blog",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis delectus vitae vel, inventore eius labore. Ipsam saepe maxime rem quae ipsum natus. Cum perferendis, vitae rem, non quod facilis atque voluptatum deleniti eum repellendus, nemo dolor expedita illo maxime dolorum. Magnam magni culpa error sed cumque minus, soluta illo nisi alias quasi explicabo eveniet itaque repellendus inventore corrupti iste! Alias neque adipisci, hic minus est cum nesciunt sapiente, repellat nam ea dolorum saepe qui. Voluptas dolor quae minima nemo obcaecati corporis, fugit earum nihil? Magni eos in ad facere maiores perspiciatis repellendus nesciunt, nostrum commodi sapiente minima aperiam nisi nam a? Quaerat repudiandae dignissimos vitae libero error nam consequatur rem voluptates ut? Voluptate debitis nesciunt quae omnis iste provident adipisci velit? Amet quaerat voluptate necessitatibus facere unde quas ad atque! Dolorem earum ab debitis, temporibus facilis id libero dolorum. Asperiores, perferendis sed! Voluptates repudiandae eius enim fugiat esse officiis nam nobis pariatur eligendi laudantium in vero quos inventore saepe at, accusantium soluta ullam magni magnam sed nemo labore corrupti exercitationem. Ratione optio sed autem culpa fuga temporibus odit voluptate illum velit reprehenderit! Molestias inventore nulla, ipsam veniam, quibusdam quos iusto non voluptas illum laborum necessitatibus repellendus voluptates natus incidunt hic.",
      slug: "new-blog",
    },
  ]);
  const addBlog = (blog: BlogEntity) => {
    setBlogs((prevState) => {
      return prevState.concat(blog);
    });
    console.log(blogs);
  };

  const context = {
    blogs: blogs,
    addBlog: addBlog,
  };
  return (
    <BlogContext.Provider value={context}>
      {props.children}
    </BlogContext.Provider>
  );
}
export default BlogContext;
