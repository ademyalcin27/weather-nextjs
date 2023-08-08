"use client";
import SearchIcon from "@mui/icons-material/Search";
import {styles} from "./Input.module";

interface InputProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ handleSearch, setLocation }: InputProps) => {
  return (
    <form className={styles.form}>   
      <label htmlFor="search" className={styles.label}>Search</label>
      <div className="relative w-full">
        <div className={styles.iconWrapper}>
          <SearchIcon />
        </div>
          <input 
              type="search" 
              id="search" 
              onKeyDown={handleSearch}
              onChange={(e) => setLocation(e.target.value)} 
              className={styles.input} placeholder="Search" required />
          <button type="submit" className={styles.button}>Search</button>
      </div>
  </form>
  )
}

export default Input;