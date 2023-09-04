import { useContext } from "react";
import { SettingTabCtx, normalizePath } from "../common";
import TextComfirmSetting from "../components/TextComfirm";
import { ImageExcerptSetting } from "./ImageExcerpt";
import CitationLibrarySelect from "./LibSelect";

export default function General() {
  const { noteIndex } = useContext(SettingTabCtx).plugin.settings;
  return (
    <>
      <TextComfirmSetting
        name="Default location for new literature notes"
        settings={noteIndex}
        prop="literatureNoteFolder"
        normalize={normalizePath}
      />
      <CitationLibrarySelect />
      <ImageExcerptSetting />
    </>
  );
}
