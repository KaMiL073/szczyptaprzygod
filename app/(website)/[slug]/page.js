import Container from "@/components/container";
import PostList from "@/components/postlist";
import { getAllCategories, getPostsByCategory } from "@/lib/sanity/client";
import { notFound } from "next/navigation";

const CategoryPage = async ({ params }) => {
  const posts = await getPostsByCategory(params.slug); // Pobieranie postów dla kategorii

  if (!posts || posts.length === 0) {
    notFound(); // Jeśli nie ma postów, zwróć 404
  }

  // Wyciągamy tytuł kategorii z pierwszego posta
  const categoryTitle = posts[0]?.categories[0]?.title || "Nieznana kategoria";

  return (
    <Container className="relative">
      <h1 className="text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        {categoryTitle}
      </h1>

      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
        {posts.map((post) => (
          <PostList key={post._id} post={post} aspect="landscape" />
        ))}
      </div>
    </Container>
  );
};

// Generowanie ścieżek statycznych dla wszystkich kategorii
export async function generateStaticParams() {
  const categories = await getAllCategories(); // Pobieranie wszystkich kategorii

  return categories.map((category) => ({
    slug: category.slug, // Zwracanie ścieżek na podstawie slugów kategorii
  }));
}

export default CategoryPage;
