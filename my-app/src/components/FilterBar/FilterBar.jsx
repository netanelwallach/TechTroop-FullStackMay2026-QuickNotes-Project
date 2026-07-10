import styles from "./FilterBar.module.css";

function FilterBar({ onSearchChange, onCategoryChange }) {
  return (
    <form
      className={styles["filter-form"]}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className={styles["search-text-group"]}>
        <input
          type="search"
          id="search-box"
          name="q"
          placeholder="🔍 Search notes..."
          onChange={(e) => onSearchChange(e.target.value)}
          className={styles["search-input"]}
        />
      </div>

      <div className={styles["search-category-group"]}>
        <input
          type="radio"
          name="category"
          id="cat-all"
          value=""
          defaultChecked
          onChange={(e) => onCategoryChange(e.target.value)}
          className={styles["radio-input"]}
        />
        <label
          htmlFor="cat-all"
          className={`${styles["category-chip"]} all-chip`}
        >
          All
        </label>

        <input
          type="radio"
          name="category"
          id="cat-personal"
          value="personal"
          onChange={(e) => onCategoryChange(e.target.value)}
          className={styles["radio-input"]}
        />
        <label
          htmlFor="cat-personal"
          className={`${styles["category-chip"]} personal-chip`}
        >
          Personal
        </label>

        <input
          type="radio"
          name="category"
          id="cat-work"
          value="work"
          onChange={(e) => onCategoryChange(e.target.value)}
          className={styles["radio-input"]}
        />
        <label
          htmlFor="cat-work"
          className={`${styles["category-chip"]} work-chip`}
        >
          Work
        </label>

        <input
          type="radio"
          name="category"
          id="cat-ideas"
          value="ideas"
          onChange={(e) => onCategoryChange(e.target.value)}
          className={styles["radio-input"]}
        />
        <label
          htmlFor="cat-ideas"
          className={`${styles["category-chip"]} ideas-chip`}
        >
          Ideas
        </label>
      </div>
    </form>
  );
}

export default FilterBar;
