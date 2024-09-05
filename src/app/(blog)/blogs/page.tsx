"use client";

import BlogCard from "@/components/Card/BlogCard";
import { useBlog } from "@/hooks/useBlog";
import { CircularProgress, Grid } from "@mui/material";

export default function BlogPage() {
  const { blogs, blogsLoading } = useBlog();
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      padding={3}
    >
      {blogsLoading && blogs ? (
        <CircularProgress />
      ) : (
        <Grid item xs={2} sm={4} md={4}>
          {blogs?.map((blog) => <BlogCard key={blog._id} {...blog} />)}
        </Grid>
      )}
    </Grid>
  );
}
