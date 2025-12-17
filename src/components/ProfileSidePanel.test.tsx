import { render, screen, fireEvent } from '@testing-library/react';
import ProfileSidePanel from './ProfileSidePanel';
import { MemoryRouter } from 'react-router-dom';

describe('ProfileSidePanel', () => {
  it('renders menu icon and opens drawer', () => {
    render(
      <MemoryRouter>
        <ProfileSidePanel darkMode={false} onThemeToggle={() => {}} />
      </MemoryRouter>
    );
    const menuButton = screen.getByLabelText(/menu/i);
    expect(menuButton).toBeInTheDocument();
    fireEvent.click(menuButton);
    expect(screen.getByText(/Profile/i)).toBeInTheDocument();
  });

  it('toggles dark mode switch', () => {
    const onThemeToggle = jest.fn();
    render(
      <MemoryRouter>
        <ProfileSidePanel darkMode={false} onThemeToggle={onThemeToggle} />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByLabelText(/menu/i));
    const switchInput = screen.getByRole('switch');
    fireEvent.click(switchInput);
    expect(onThemeToggle).toHaveBeenCalled();
  });

  it('renders dashboard navigation', () => {
    render(
      <MemoryRouter>
        <ProfileSidePanel open={true} onClose={() => {}} />
      </MemoryRouter>
    );
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });
});
