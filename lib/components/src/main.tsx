import React from "react";
import ReactDOM from "react-dom";
import { AnnotsViewContext, ObsidianContext } from "./components";
import { PrepareNote } from "./components/note-fields";
import "./index.css";
import { annotViewCtx, context } from "./mock";
import { NoteFieldsMock } from "./mock/note-fields";

for (const id of ["right", "main"]) {
  ReactDOM.render(
    <React.StrictMode>
      <ObsidianContext.Provider value={context}>
        <AnnotsViewContext.Provider value={annotViewCtx}>
          <PrepareNote onClick={() => void 0} />
        </AnnotsViewContext.Provider>
      </ObsidianContext.Provider>
    </React.StrictMode>,
    document.getElementById(id) as HTMLElement,
  );
}