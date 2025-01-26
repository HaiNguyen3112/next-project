import { render, screen } from '@testing-library/react';

import Footer from '@/components/footer/Footer';

describe('Footer Component', () => {
  it('renders the footer text correctly', () => {
    render(<Footer />);

    const footerText = screen.getByText(
      `© ${new Date().getFullYear()} My Next.js App. All rights reserved.`,
    );

    expect(footerText).toBeInTheDocument();
  });

  it('displays the footer text in the center', () => {
    render(<Footer />);

    const footerText = screen.getByText(
      `© ${new Date().getFullYear()} My Next.js App. All rights reserved.`,
    );

    expect(footerText).toHaveStyle({ textAlign: 'center' });
  });
});
