import { CreateBlogDto, UpdateBlogDto } from "@/common/dto/blog.dto";
import { blogService } from "@/services/blog.service";
import { BlogStore } from "@/stores/blog.store";
import { useMutation, useQuery } from "react-query";

export const useBlog = (blogId?: string) => {
  const { setBlogs, setBlog } = BlogStore();

  const blogsQuery = useQuery(
    "blogs",
    async () => {
      return await blogService.getBlogs();
    },
    {
      onSuccess: (data) => {
        setBlogs(data.data);
      },
    },
  );

  const blogQuery = useQuery(
    ["blog", blogId],
    async ({ queryKey }) => {
      const [, id] = queryKey;
      return await blogService.getBlog(id as string);
    },
    {
      onSuccess: (data) => {
        setBlog(data.data);
      },
    },
  );

  const createBlogMutation = useMutation(
    async (blog: CreateBlogDto) => {
      return await blogService.createBlog(blog);
    },
    {
      onSuccess: (data) => {
        blogsQuery.refetch();
      },
    },
  );

  const updateBlogMutation = useMutation(
    async ({ blog, id }: { blog: UpdateBlogDto; id: string }) => {
      return await blogService.updateBlog(id, blog);
    },
    {
      onSuccess: (data) => {
        blogsQuery.refetch();
      },
    },
  );

  const deleteBlogMutation = useMutation(
    async (id: string) => {
      return await blogService.deleteBlog(id);
    },
    {
      onSuccess: (data) => {
        blogsQuery.refetch();
      },
    },
  );

  return {
    blogs: blogsQuery.data?.data,
    blog: blogQuery.data?.data,
    blogsLoading: blogsQuery.isLoading,
    blogLoading: blogQuery.isLoading,
    blogsRefetch: blogsQuery.refetch,
    blogRefetch: blogQuery.refetch,
    createBlogMutation,
    updateBlogMutation,
    deleteBlogMutation,
  };
};
