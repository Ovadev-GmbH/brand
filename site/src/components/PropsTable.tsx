import { componentDoc } from "../props";
import type { PkgId } from "../types";

/** The props of one component, out of the generated tables. */
export function PropsTable({ pkg, name }: { pkg: PkgId; name: string }) {
  const doc = componentDoc(pkg, name);
  if (!doc) return <p className="cat-muted">No props documentation for {name}.</p>;
  return (
    <>
      {doc.description ? <p className="cat-muted">{doc.description}</p> : null}
      {doc.props.length === 0 ? (
        <p className="cat-muted">{name} has no props of its own.</p>
      ) : (
        <div className="cat-tablewrap">
          <table className="cat-table" aria-label={`Props of ${name}`}>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {doc.props.map((p) => (
                <tr key={p.name}>
                  <td className="cat-nowrap">
                    <code className="cat-prop">{p.name}</code>
                    {p.required ? <span className="cat-prop__req" title="required">*</span> : null}
                  </td>
                  <td>
                    <code className="cat-type">{p.type}</code>
                  </td>
                  <td className="cat-nowrap cat-muted">{p.defaultValue ? <code className="cat-type">{p.defaultValue}</code> : null}</td>
                  <td className="cat-muted">{p.description || null}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
