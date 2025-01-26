'use client';

import { AppBar, Toolbar, Box, Stack, Container } from '@mui/material';
import image from '@/public/assets/images/monkey-header.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Define the navigation structure
const navLinks = [
  {
    label: 'Shop',
    href: '/shop',
    subLinks: [
      { label: "Men's Clothing", href: '/shop/men' },
      { label: "Women's Clothing", href: '/shop/women' },
    ],
  },
  {
    label: 'Recipes',
    href: '/recipes',
    subLinks: [
      { label: 'Categories', href: '/recipes/recipes' },
      { label: 'Collections', href: '/recipes/recipes' },
      { label: 'Resources', href: '/recipes/recipes' },
    ],
  },
  {
    label: 'Learn',
    href: '/learn',
    subLinks: [],
  },
  {
    label: 'About',
    href: '/about',
    subLinks: [],
  },
  {
    label: 'Blog',
    href: '/blog',
    subLinks: [],
  },
];

export default function Header() {
  const [activeSubLinks, setActiveSubLinks] = useState<any[]>([]);
  const [isSubNavigationVisible, setSubNavigationVisible] = useState(false);

  const handleMouseEnter = (subLinks: any[]) => {
    setActiveSubLinks(subLinks);
    setSubNavigationVisible(true);
  };

  const handleMouseLeave = () => {
    setSubNavigationVisible(false);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: '1px solid #eee', position: 'relative' }}
    >
      {/* Monkey Header Image */}
      <Image
        src={image}
        alt="Monkey Header"
        height={100}
        style={{
          borderRadius: '50%',
          position: 'absolute',
          marginLeft: '7%',
        }}
      />
      <Toolbar sx={{ marginLeft: '15%', paddingLeft: 'unset !important' }}>
        {/* Main Navigation */}
        <Stack
          direction="row"
          spacing={4}
          sx={{
            flexGrow: 1,
            '& a': {
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '3px',
            },
          }}
        >
          {navLinks.map((link) => (
            <Box
              key={link.label}
              onMouseEnter={() => handleMouseEnter(link.subLinks)}
              onMouseLeave={() => setSubNavigationVisible(false)}
            >
              <Link href={link.href}>{link.label}</Link>
            </Box>
          ))}
        </Stack>
      </Toolbar>

      {/* Sub Navigation */}
      <Box
        onMouseEnter={() => setSubNavigationVisible(true)} // Keep sub-navigation visible when hovering
        onMouseLeave={handleMouseLeave} // Hide sub-navigation when mouse leaves
        sx={{
          backgroundColor: '#e3d9c5',
          borderTop: '1px solid #eee',
          display: 'flex', // Show only if sub-navigation is visible
          justifyContent: 'flex-start',
          paddingLeft: '15%',
          height: '50px',
          alignItems: 'center',
        }}
      >
        {activeSubLinks.length > 0 ? (
          <Stack
            direction="row"
            spacing={4}
            sx={{
              '& a': {
                fontWeight: 500,
                textTransform: 'uppercase',
                fontSize: '12px',
                letterSpacing: '2px',
              },
            }}
          >
            {activeSubLinks.map((subLink) => (
              <Link key={subLink.label} href={subLink.href}>
                {subLink.label}
              </Link>
            ))}
          </Stack>
        ) : (
          <Box
            sx={{ fontSize: '14px', fontStyle: 'italic', color: '#555' }}
          ></Box>
        )}
      </Box>
    </AppBar>
  );
}
