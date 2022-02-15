import { declare } from "@babel/helper-plugin-utils";
import { types as t } from "@babel/core";
// import fs from "fs";

// let tmpFolder = "tmp-babel-plugin-monolith";
// let outputString = "";

export default declare((api) => {
  api.assertVersion(7);

  return {
    name: "build-server-side",

    visitor: {
      Program: {
        enter(path, state) {
          // outputString = "";
        },
        exit(path, state) {
          // console.log("path", path.node);
          //     // if (!fs.existsSync(tmpFolder)) {
          //     //   fs.mkdirSync(tmpFolder);
          //     // }
          //     // console.log("Write file 1");
          //     // try {
          //     //   fs.writeFileSync(`${tmpFolder}/index.backend.js`, outputString);
          //     // } catch (e) {
          //     //   console.log(e);
          //     // }
          //     // console.log("Write file 2");
        },
      },
      FunctionDeclaration: {
        enter(path, state) {
          // console.log("FunctionDeclaration...enter");
          if (path.node.id.name === "getServerSide") {
            const { returnType } = path.node;
            if (!returnType) {
              throw new Error("Type of getServerSide must be annotate");
            }

            if (returnType.type === "TSTypeAnnotation") {
              const { typeAnnotation } = returnType;
              if (typeAnnotation.type === "TSTypeReference") {
                console.log("typeAnnotation.typeParameters...");
                console.log(typeAnnotation.typeParameters.params);
              }
            } else {
              throw new Error(
                `Unexpected annotation type ${path.node.returnType.type}`
              );
            }

            // // console.log(path.node.body);
            // path.node.body.body.forEach((node) => {
            //   // console.log(node);
            //   if (node.type === "ReturnStatement") {
            //     if (node.argument.type === "Identifier") {
            //       // TODO: Add support
            //     } else if (node.argument.type === "StringLiteral") {
            //       // TODO: Add support
            //     } else if (node.argument.type === "CallExpression") {
            //       console.log("node...");
            //       console.log(node);
            //       console.log("node.argument...");
            //       console.log(node.argument);
            //     } else {
            //       throw new Error(
            //         `Unexpected node.type: ${node.argument.type}`
            //       );
            //     }
            //   }
            // });
          }
        },
        exit(path, state) {
          // console.log("FunctionDeclaration...exit");
        },
      },
      // Identifier(path, state) {
      //   // console.log("Identifier...", path.node.name);
      // },
      // // Class(path, state) {
      // //   console.log("Class...");
      // // },
      // // ClassMethod(path, state) {
      // //   console.log("ClassMethod...");
      // // },
      // // CallExpression(path, state) {
      // //   console.log("CallExpression...");
      // // },
      // JSXElement: {
      //   enter(path, state) {
      //     console.log("JSXElement...");
      //   },
      // },
    },
  };
});
