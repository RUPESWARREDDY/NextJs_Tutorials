export const metadata = {
  title: {
    default:'About Page',
    template: '%s - About Page',
  },
    description: 'About Page Description'
}
export default function AboutLayout({ children }) {
    return (
      <div>
        <h3>📄 About Section</h3>
        <section>{children}</section>
      </div>
    );
  }