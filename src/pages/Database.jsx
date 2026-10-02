import LearnLayout from "../components/LearnLayout";

const Database = () => {
  return (
    <LearnLayout
      title="Database Management & Architecture"
      subtitle="Store, structure, manage, and optimize SQL & NoSQL databases for high-availability enterprise applications."
      category="Database & Data Engineering"
      duration="2 Months"
      level="Beginner to Advanced"
      projects="3+ Production DB Schemas"
      tools={["MongoDB", "MySQL", "PostgreSQL", "Mongoose", "Prisma ORM", "Redis", "Database Indexing"]}
      points={[
        { title: "MongoDB & Document Stores", desc: "Design flexible NoSQL schemas, document relations, aggregation pipelines, and indexing." },
        { title: "MySQL & Relational Databases", desc: "Master SQL queries, joins, foreign keys, normalization (1NF, 2NF, 3NF), and transactions." },
        { title: "Database Architecture & Design", desc: "Design entity-relationship diagrams (ERD), scalable schemas, and data modeling strategies." },
        { title: "Advanced Query Optimization", desc: "Execute complex JOINs, aggregation pipelines, indexing strategies, and query performance tuning." },
        { title: "Database Indexing & Caching", desc: "Speed up response times using indexes, execution plans, and Redis caching layers." },
        { title: "Security & Data Protection", desc: "Implement role-based access control, SQL injection prevention, backup strategies, and encryption." },
      ]}
    />
  );
};

export default Database;

