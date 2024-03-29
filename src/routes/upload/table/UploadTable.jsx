import { Card, Typography } from "@material-tailwind/react";
import CustomSelect from "../../../components/CustomSelect";
import Tags from "../../../components/Tags";

const TABLE_HEAD = ["SI No.", "Links", "Prefix", "Add Tags", "Selected Tags"];

export function UploadTable({ data, handleAddTag, handleRemoveTag }) {
  return (
    <Card className="h-full w-full bg-blue-gray-50 overflow-auto px-2">
      <table className="table-auto text-left border-spacing-y-4 border-separate mx-2 ">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className=" bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="black"
                  className="font-semibold text-sm"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {data.map(
            ({ id, links, prefix, select_tags, selected_tags }, index) => {
              const isLast = index === data.length - 1;
              const classes = isLast ? "p-4 bg-white" : "p-4 bg-white";

              return (
                <tr className={classes} key={id}>
                  <td className={"p-4 rounded-l-lg"}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {id}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <a
                        className="cursor-pointer"
                        href={"https://www." + links}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        {links}
                      </a>
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {prefix}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      <CustomSelect
                        id={id}
                        label="Select Tags"
                        onChange={handleAddTag}
                        options={select_tags.split(",")}
                        parentStyleProps={{ width: "121px" }}
                        containerProps={{ style: { minWidth: "100px" } }}
                      />
                    </Typography>
                  </td>
                  <td colSpan={5} className={"rounded-r-lg"}>
                    <div className={"flex flex-row items-center px-2"}>
                      {selected_tags.split(",").map((item, index) => {
                        const isFirst = index === 0;
                        const classes = isFirst ? "" : "ml-2";
                        return (
                          item && (
                            <Tags
                              id={id}
                              key={index}
                              label={item}
                              onClick={handleRemoveTag}
                              classes={classes}
                            />
                          )
                        );
                      })}
                    </div>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </Card>
  );
}
