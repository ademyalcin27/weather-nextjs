"use client";
import SearchIcon from "@mui/icons-material/Search";
import {styles} from "./Input.module";

interface InputProps {
  handleSearch: () => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ handleSearch, setLocation }: InputProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSearch()
    }
  }
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
              onKeyDown={handleKeyDown}
              onChange={(e) => setLocation(e.target.value)} 
              className={styles.input} placeholder="Search" required />
          <button type="button" className={styles.button} onClick={() => handleSearch()}>Search</button>
      </div>
  </form>
  )
}

export default Input;