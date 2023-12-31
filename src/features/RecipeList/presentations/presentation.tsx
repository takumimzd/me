import { Container, SimpleGrid } from '@mantine/core';
import Link from 'next/link';
import { Card } from '@/components/Card';

export type Props = {
  recipeWithUser: {
    recipeId: number;
    recipeTitle: string;
    recipeImage: string;
    userName: string;
    userImage: string;
  }[];
};

export const Presentation = ({ recipeWithUser }: Props) => {
  return (
    <Container py='xl'>
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 2 }]}>
        {recipeWithUser.map((recipe) => (
          <li key={recipe.recipeId}>
            <Link href={`/recipes/${recipe.recipeId}`}>
              <Card
                image={recipe.recipeImage}
                title={recipe.recipeTitle}
                author={{
                  name: recipe.userName,
                  image: recipe.userImage,
                }}
              />
            </Link>
          </li>
        ))}
      </SimpleGrid>
    </Container>
  );
};
