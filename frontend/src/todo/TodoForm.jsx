import React from "react";
import Grid from "../template/Grid";
import IconButton from "../template/IconButton";

export default function TodoForm({
  onClick,
  description,
  onChange,
  handleSearch,
  handleClear,
}) {
  const keyHandler = (e) => {
    if (e.key === "Enter") {
      e.shiftKey ? handleSearch() : onClick();
    } else if (e.key === "Escape") {
      handleClear();
    }
  };

  return (
    <div role="form" className="todoForm">
      <Grid cols="12 9 10">
        <input
          type="text"
          id="description"
          className="form-control"
          placeholder="Adicione uma tarefa"
          value={description}
          onChange={onChange}
          onKeyUp={keyHandler}
        />
      </Grid>

      <Grid cols="12 3 2">
        <IconButton style="primary" icon="plus" onClick={onClick} />
        <IconButton style="info" icon="search" onClick={handleSearch} />
        <IconButton style="default" icon="close" onClick={handleClear} />
      </Grid>
    </div>
  );
}
