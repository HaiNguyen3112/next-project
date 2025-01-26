'use client';

import {
  Breadcrumbs,
  Link,
  Typography,
  Box,
  Stack,
  Button,
  Container,
  Divider,
  SxProps,
  Theme,
} from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import Image from 'next/image';
import recipeImage from '@/public/assets/images/bread.jpg';
import cookieImage from '@/public/assets/images/cookie.png';
import { AccessTime, Add } from '@mui/icons-material';
import DOMPurify from 'dompurify';
import { useState } from 'react';
import { Recipe } from '@/types/types';
import { bananaBreadRecipe } from '../constants';

const LabelSx: SxProps<Theme> = {
  fontWeight: 700,
  color: 'black',
  fontSize: '12px',
};
const ValueSx: SxProps<Theme> = {
  fontWeight: 300,
  color: 'black',
  fontSize: '18px',
};

export default function RecipePage() {
  const [recipe] = useState<Recipe>(bananaBreadRecipe);
  const sanitizedContent = DOMPurify.sanitize(recipe.description);
  return (
    <Container sx={{ py: 4 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Link underline="hover" color="inherit" href="#">
          Recipes
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Bread
        </Link>
        <Typography color="text.primary">Quick Bread</Typography>
      </Breadcrumbs>

      {/* Title and Content */}
      <Stack direction="row" spacing={4} alignItems="flex-start">
        <Box flex={1}>
          {/* Recipe Title */}
          <Typography variant="h3" component="h1" gutterBottom>
            {recipe.title}
          </Typography>

          {/* Description */}
          <Box sx={{ marginTop: '50px', marginBottom: '20px' }}>
            <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
          </Box>

          {/* Time Information */}
          <Box className="flex flex-row items-center  gap-x-6">
            <AccessTime fontSize="large" />
            <Box>
              <Typography sx={LabelSx}>PREP</Typography>
              <Typography sx={ValueSx}>{recipe.prepTime}</Typography>
            </Box>
            <Box>
              <Typography sx={LabelSx}>BAKE</Typography>
              <Typography sx={ValueSx}>{recipe.bakeTime}</Typography>
            </Box>
            <Box>
              <Typography sx={LabelSx}>TOTAL</Typography>
              <Typography sx={ValueSx}>{recipe.totalTime}</Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />
          {/* Yield Information */}
          <Box className="flex flex-row items-center  gap-x-6">
            <Image
              src={cookieImage}
              width={35}
              height={35}
              alt="YIELD"
              style={{ scale: 0.85 }}
            />
            <Box className="flex flex-col items-start gap-x-6">
              <Typography sx={LabelSx}>YIELD</Typography>
              <Typography sx={ValueSx}>{recipe.yield}</Typography>
            </Box>
            {/* Save and Print Buttons */}
            <Box
              className="flex flex-row items-center gap-x-2"
              sx={{
                '& button': {
                  textTransform: 'none',
                  color: 'black',
                  borderColor: '#d95c5c',
                },
              }}
            >
              <Button
                variant="outlined"
                sx={{ minWidth: '133px' }}
                startIcon={<Add />}
              >
                Save Recipe
              </Button>
              <Button variant="outlined" startIcon={<PrintIcon />}>
                Print
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Recipe Image */}
        <Box>
          <Image
            src={recipeImage}
            alt="Whole-Grain Banana Bread"
            height={300}
            style={{ borderRadius: 8 }}
          />
        </Box>
      </Stack>
    </Container>
  );
}
