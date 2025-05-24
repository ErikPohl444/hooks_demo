// Contact.tsx
// This component displays initial usage information for the app.

// Functional component for the Home page
const Home: React.FC = () => {
  return (
    <div className="home">
      <p>
        This is the home page. You can select a menu item from the sidebar to
        view its content.
      </p>
      <p>Click on the menu items to see the corresponding content.</p>
      <p>Each menu item corresponds to a different React hook or page.</p>
      <p>
        For example, clicking on "useState" will show you an example of the
        useState hook.
      </p>
      <p>Click on "useEffect" to see an example of the useEffect hook.</p>
      <p>Feel free to explore the different hooks and their usage.</p>
      <p>Each hook has its own unique functionality and use cases.</p>
      <p>Have fun learning React!</p>
    </div>
  );
};

export default Home;
