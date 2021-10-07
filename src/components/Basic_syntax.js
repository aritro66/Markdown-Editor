import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircleIcon from '@mui/icons-material/Circle';
import Checkbox from '@mui/material/Checkbox';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  
}));



export default function Basic_syntax() {
  return (
    <>

      <Box sx={{ width: '90%', maxWidth: 700, margin: 'auto' ,marginBottom: "30px"}} id="Overview">
        <Typography variant="h4" gutterBottom component="div">
          Overview
        </Typography>
        <Typography variant="body2" gutterBottom>
          Nearly all Markdown applications support the basic syntax outlined in John Gruber’s original design document. There are minor variations and discrepancies between Markdown processors — those are noted inline wherever possible.
        </Typography>
      </Box>
      <Box sx={{ width: '90%', maxWidth: 700, margin: 'auto' ,marginBottom: "30px"}} id="Headings">
        <Typography variant="h4" gutterBottom component="div">
          Headings
        </Typography>
        <Typography variant="body2" gutterBottom>
          To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use should correspond to the heading level. For example, to create a heading level three {"(<h3>)"}, use three number signs (e.g., ### My Header).
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Markdown</StyledTableCell>
                <StyledTableCell align="left">HTML</StyledTableCell>
                <StyledTableCell align="left">Rendered Output</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              <StyledTableRow>

                <StyledTableCell align="left"># Heading level 1</StyledTableCell>
                <StyledTableCell align="left">{"<h1>Heading level 1</h1>"}</StyledTableCell>
                <StyledTableCell align="left"><Typography variant="h1" style={{fontSize:"30px"}}>
                  Heading level 1
                </Typography></StyledTableCell>

              </StyledTableRow>
              <StyledTableRow>

                <StyledTableCell align="left">## Heading level 2</StyledTableCell>
                <StyledTableCell align="left">{"<h2>Heading level 1</h2>"}</StyledTableCell>
                <StyledTableCell align="left"><Typography variant="h2" style={{fontSize:"25px"}}>
                  Heading level 2
                </Typography></StyledTableCell>

              </StyledTableRow>
              <StyledTableRow>

                <StyledTableCell align="left">### Heading level 3</StyledTableCell>
                <StyledTableCell align="left">{"<h3>Heading level 3</h3>"}</StyledTableCell>
                <StyledTableCell align="left"><Typography variant="h3" style={{fontSize:"20px"}}>
                  Heading level 3
                </Typography></StyledTableCell>

              </StyledTableRow>
              <StyledTableRow>

                <StyledTableCell align="left">#### Heading level 4</StyledTableCell>
                <StyledTableCell align="left">{"<h4>Heading level 4</h4>"}</StyledTableCell>
                <StyledTableCell align="left"><Typography variant="h4" style={{fontSize:"17px"}}>
                  Heading level 4
                </Typography></StyledTableCell>

              </StyledTableRow>
              <StyledTableRow>

                <StyledTableCell align="left">##### Heading level 5</StyledTableCell>
                <StyledTableCell align="left">{"<h5>Heading level 5</h5>"}</StyledTableCell>
                <StyledTableCell align="left"><Typography variant="h5" style={{fontSize:"14px"}}>
                  Heading level 5
                </Typography></StyledTableCell>

              </StyledTableRow>
              <StyledTableRow>

                <StyledTableCell align="left">###### Heading level 6</StyledTableCell>
                <StyledTableCell align="left">{"<h6>Heading level 1</h6>"}</StyledTableCell>
                <StyledTableCell align="left"><Typography variant="h6" style={{fontSize:"12px"}}>
                  Heading level 6
                </Typography></StyledTableCell>

              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>


      </Box>
      <Box sx={{ width: '90%', maxWidth: 700, margin: 'auto',marginBottom: "30px" }}>
        <Typography variant="h4" gutterBottom component="div">
          Alternate Syntax
        </Typography>
        <Typography variant="body2" gutterBottom>
          Alternatively, on the line below the text, add any number of == characters for heading level 1 or -- characters for heading level 2.
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Markdown</StyledTableCell>
                <StyledTableCell align="left">HTML</StyledTableCell>
                <StyledTableCell align="left">Rendered Output</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              <StyledTableRow>

                <StyledTableCell align="left"><Typography variant="p" component="div">Heading level 1</Typography><Typography variant="p" component="div">===============</Typography></StyledTableCell>
                <StyledTableCell align="left">{"<h1>Heading level 1</h1>"}</StyledTableCell>
                <StyledTableCell align="left"><Typography variant="h1" style={{fontSize:"30px"}}>
                  Heading level 1
                </Typography></StyledTableCell>

              </StyledTableRow>
              <StyledTableRow>

                <StyledTableCell align="left"><Typography variant="p" component="div">Heading level 2</Typography><Typography variant="p" component="div">---------------</Typography></StyledTableCell>
                <StyledTableCell align="left">{"<h2>Heading level 1</h2>"}</StyledTableCell>
                <StyledTableCell align="left"><Typography variant="h2" style={{fontSize:"25px"}}>
                  Heading level 2
                </Typography></StyledTableCell>

              </StyledTableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ width: '90%', maxWidth: 700, margin: 'auto',marginBottom: "30px" }} id="Paragraphs">
        <Typography variant="h4" gutterBottom component="div">
          Paragraphs
        </Typography>
        <Typography variant="body2" gutterBottom>
          To create paragraphs, use a blank line to separate one or more lines of text.
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Markdown</StyledTableCell>
                <StyledTableCell align="left">HTML</StyledTableCell>
                <StyledTableCell align="left">Rendered Output</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              <StyledTableRow>

                <StyledTableCell align="left">I really like using Markdown.</StyledTableCell>
                <StyledTableCell align="left">{"<p>I really like using Markdown.</p>"}</StyledTableCell>
                <StyledTableCell align="left"><Typography variant="p">
                  I really like using Markdown.
                </Typography></StyledTableCell>

              </StyledTableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ width: '90%', maxWidth: 700, margin: 'auto',marginBottom: "30px" }} id="Bold">
        <Typography variant="h4" gutterBottom component="div">
          Bold
        </Typography>
        <Typography variant="body2" gutterBottom>
          To bold text, add two asterisks or underscores before and after a word or phrase. To bold the middle of a word for emphasis, add two asterisks without spaces around the letters.
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Markdown</StyledTableCell>
                <StyledTableCell align="left">HTML</StyledTableCell>
                <StyledTableCell align="left">Rendered Output</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              <StyledTableRow>

                <StyledTableCell align="left">I just love **bold text**.</StyledTableCell>
                <StyledTableCell align="left">{"I just love <strong>bold text</strong>."}</StyledTableCell>
                <StyledTableCell align="left">I just love <Typography variant="p" style={{ fontWeight: 600 }}>
                  bold text
                </Typography>.</StyledTableCell>

              </StyledTableRow>
              <StyledTableRow>

                <StyledTableCell align="left">I just love __bold text__.</StyledTableCell>
                <StyledTableCell align="left">{"I just love <strong>bold text</strong>."}</StyledTableCell>
                <StyledTableCell align="left">I just love <Typography variant="p" style={{ fontWeight: 600 }}>
                  bold text
                </Typography>.</StyledTableCell>

              </StyledTableRow>

              <StyledTableRow>

                <StyledTableCell align="left">Love**is**bold</StyledTableCell>
                <StyledTableCell align="left">{"Love<strong>is</strong>bold"}</StyledTableCell>
                <StyledTableCell align="left">Love<Typography variant="p" style={{ fontWeight: 600 }}>
                  is
                </Typography>bold</StyledTableCell>

              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ width: '90%', maxWidth: 700, margin: 'auto',marginBottom: "30px" }} id="Italic">
        <Typography variant="h4" gutterBottom component="div">
          Italic
        </Typography>
        <Typography variant="body2" gutterBottom>
          To italicize text, add one asterisk or underscore before and after a word or phrase. To italicize the middle of a word for emphasis, add one asterisk without spaces around the letters.
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Markdown</StyledTableCell>
                <StyledTableCell align="left">HTML</StyledTableCell>
                <StyledTableCell align="left">Rendered Output</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              <StyledTableRow>

                <StyledTableCell align="left">Italicized text is the *cat's meow*.</StyledTableCell>
                <StyledTableCell align="left">{"Italicized text is the <em>cat's meow</em>."}</StyledTableCell>
                <StyledTableCell align="left">Italicized text is the <Typography variant="p" style={{ fontStyle: "italic" }}>
                  cat's meow.
                </Typography></StyledTableCell>

              </StyledTableRow>
              <StyledTableRow>

                <StyledTableCell align="left">Italicized text is the _cat's meow_.</StyledTableCell>
                <StyledTableCell align="left">{"Italicized text is the <em>cat's meow</em>."}</StyledTableCell>
                <StyledTableCell align="left">Italicized text is the <Typography variant="p" style={{ fontStyle: "italic" }}>
                  cat's meow.
                </Typography></StyledTableCell>

              </StyledTableRow>

              <StyledTableRow>

                <StyledTableCell align="left">A*cat*meow</StyledTableCell>
                <StyledTableCell align="left">{"A<em>cat</em>meow"}</StyledTableCell>
                <StyledTableCell align="left">A <Typography variant="p" style={{ fontStyle: "italic" }}>
                  cat
                </Typography>meow</StyledTableCell>

              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ width: '90%', maxWidth: 700, margin: 'auto',marginBottom: "30px" }} id="bi">
        <Typography variant="h4" gutterBottom component="div">
          Bold and Italic
        </Typography>
        <Typography variant="body2" gutterBottom>
          To emphasize text with bold and italics at the same time, add three asterisks or underscores before and after a word or phrase. To bold and italicize the middle of a word for emphasis, add three asterisks without spaces around the letters.
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Markdown</StyledTableCell>
                <StyledTableCell align="left">HTML</StyledTableCell>
                <StyledTableCell align="left">Rendered Output</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              <StyledTableRow>

                <StyledTableCell align="left">This text is ***really important***.</StyledTableCell>
                <StyledTableCell align="left">{"This text is <strong><em>really important</em></strong>."}</StyledTableCell>
                <StyledTableCell align="left">This text is <Typography variant="p" style={{ fontStyle: "italic", fontWeight: 600 }}>
                  really important.
                </Typography></StyledTableCell>

              </StyledTableRow>
              <StyledTableRow>

                <StyledTableCell align="left">This text is ___really important___.</StyledTableCell>
                <StyledTableCell align="left">{"This text is <strong><em>really important</em></strong>."}</StyledTableCell>
                <StyledTableCell align="left">This text is <Typography variant="p" style={{ fontStyle: "italic", fontWeight: 600 }}>
                  really important.
                </Typography></StyledTableCell>

              </StyledTableRow>
              <StyledTableRow>

                <StyledTableCell align="left">This text is __*really important*__.</StyledTableCell>
                <StyledTableCell align="left">{"This text is <strong><em>really important</em></strong>."}</StyledTableCell>
                <StyledTableCell align="left">This text is <Typography variant="p" style={{ fontStyle: "italic", fontWeight: 600 }}>
                  really important.
                </Typography></StyledTableCell>

              </StyledTableRow>
              <StyledTableRow>

                <StyledTableCell align="left">This text is **_really important**_.</StyledTableCell>
                <StyledTableCell align="left">{"This text is <strong><em>really important</em></strong>."}</StyledTableCell>
                <StyledTableCell align="left">This text is <Typography variant="p" style={{ fontStyle: "italic", fontWeight: 600 }}>
                  really important.
                </Typography></StyledTableCell>

              </StyledTableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ width: '90%', maxWidth: 700, margin: 'auto',marginBottom: "30px" }} id="ol">
        <Typography variant="h4" gutterBottom component="div">
          Ordered Lists
        </Typography>
        <Typography variant="body2" gutterBottom>
          To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Markdown</StyledTableCell>
                <StyledTableCell align="left">HTML</StyledTableCell>
                <StyledTableCell align="left">Rendered Output</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              <StyledTableRow>

                <StyledTableCell align="left"><Typography variant="p" component="div">1. First item</Typography>
                <Typography variant="p" component="div">2. Second item</Typography><Typography variant="p" component="div">3. Third item</Typography><Typography variant="p" component="div">4. Fourth item</Typography></StyledTableCell>
                <StyledTableCell align="left">{"<ol><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ol>"}</StyledTableCell>
                <StyledTableCell align="left"><Typography variant="p" component="div">1. First item</Typography>
                <Typography variant="p" component="div">2. Second item</Typography><Typography variant="p" component="div">3. Third item</Typography><Typography variant="p" component="div">4. Fourth item</Typography></StyledTableCell>

              </StyledTableRow>
              <StyledTableRow>

              <StyledTableCell align="left"><Typography variant="p" component="div">1. First item</Typography>
                <Typography variant="p" component="div">1. Second item</Typography><Typography variant="p" component="div">1. Third item</Typography><Typography variant="p" component="div">1. Fourth item</Typography></StyledTableCell>
                <StyledTableCell align="left">{"<ol><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ol>"}
                </StyledTableCell>
                <StyledTableCell align="left"><Typography variant="p" component="div">1. First item</Typography>
                <Typography variant="p" component="div">2. Second item</Typography><Typography variant="p" component="div">3. Third item</Typography><Typography variant="p" component="div">4. Fourth item</Typography></StyledTableCell>

              </StyledTableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ width: '90%', maxWidth: 700, margin: 'auto',marginBottom: "30px" }} id="ul">
        <Typography variant="h4" gutterBottom component="div">
          Unordered Lists
        </Typography>
        <Typography variant="body2" gutterBottom>
        To create an unordered list, add dashes {"(-)"}, asterisks {"(*)"}, or plus signs {"(+)"} in front of line items. Indent one or more items to create a nested list.
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Markdown</StyledTableCell>
                <StyledTableCell align="left">HTML</StyledTableCell>
                <StyledTableCell align="left">Rendered Output</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              <StyledTableRow>

                <StyledTableCell align="left"><Typography variant="p" component="div">- First item</Typography>
                <Typography variant="p" component="div">- Second item</Typography><Typography variant="p" component="div">- Third item</Typography><Typography variant="p" component="div">- Fourth item</Typography></StyledTableCell>
                <StyledTableCell align="left">{"<ul><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ul>"}
                </StyledTableCell>
                <StyledTableCell align="left"><Typography variant="p" component="div"><CircleIcon style={{fontSize:"10px"}}/> First item</Typography>
                <Typography variant="p" component="div"><CircleIcon style={{fontSize:"10px"}}/> Second item</Typography><Typography variant="p" component="div"><CircleIcon style={{fontSize:"10px"}}/> Third item</Typography><Typography variant="p" component="div"><CircleIcon style={{fontSize:"10px"}}/> Fourth item</Typography></StyledTableCell>

              </StyledTableRow>
              <StyledTableRow>

                <StyledTableCell align="left"><Typography variant="p" component="div">* First item</Typography>
                <Typography variant="p" component="div">* Second item</Typography><Typography variant="p" component="div">* Third item</Typography><Typography variant="p" component="div">* Fourth item</Typography></StyledTableCell>
                <StyledTableCell align="left">{"<ul><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ul>"}
                </StyledTableCell>
                <StyledTableCell align="left"><Typography variant="p" component="div"><CircleIcon style={{fontSize:"10px"}}/> First item</Typography>
                <Typography variant="p" component="div"><CircleIcon style={{fontSize:"10px"}}/> Second item</Typography><Typography variant="p" component="div"><CircleIcon style={{fontSize:"10px"}}/> Third item</Typography><Typography variant="p" component="div"><CircleIcon style={{fontSize:"10px"}}/> Fourth item</Typography></StyledTableCell>

              </StyledTableRow>

              <StyledTableRow>

                <StyledTableCell align="left"><Typography variant="p" component="div">+ First item</Typography>
                <Typography variant="p" component="div">+ Second item</Typography><Typography variant="p" component="div">+ Third item</Typography><Typography variant="p" component="div">+ Fourth item</Typography></StyledTableCell>
                <StyledTableCell align="left">{"<ul><li>First item</li><li>Second item</li><li>Third item</li><li>Fourth item</li></ul>"}
                </StyledTableCell>
                <StyledTableCell align="left"><Typography variant="p" component="div"><CircleIcon style={{fontSize:"10px"}}/> First item</Typography>
                <Typography variant="p" component="div"><CircleIcon style={{fontSize:"10px"}}/> Second item</Typography><Typography variant="p" component="div"><CircleIcon style={{fontSize:"10px"}}/> Third item</Typography><Typography variant="p" component="div"><CircleIcon style={{fontSize:"10px"}}/> Fourth item</Typography></StyledTableCell>

              </StyledTableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </Box>


      <Box sx={{ width: '90%', maxWidth: 700, margin: 'auto',marginBottom: "30px" }} id="Code">
        <Typography variant="h4" gutterBottom component="div">
          Code
        </Typography>
        <Typography variant="body2" gutterBottom>
          To denote a word or phrase as code, enclose it in backticks {"(```)"} and also add language name.
        </Typography>


      </Box>

      <Box sx={{ width: '90%', maxWidth: 700, margin: 'auto',marginBottom: "30px" }} id="Blockquotes">
        <Typography variant="h4" gutterBottom component="div">
          Blockquotes
        </Typography>
        <Typography variant="body2" gutterBottom>
          To create a blockquote, add a {">"} in front of a paragraph.
        </Typography>
        <Typography variant="body2" gutterBottom>
          {">"} Dorothy followed her through many of the beautiful rooms in her castle.
        </Typography>
        <Typography variant="body2" gutterBottom style={{ backgroundColor: "#f9f9f9", padding: "5px", borderLeft: "10px solid #cccccc" }}>
          Dorothy followed her through many of the beautiful rooms in her castle.
        </Typography>

      </Box>
      <Box sx={{ width: '90%', maxWidth: 700, margin: 'auto',marginBottom: "30px" }} id="hr">
        <Typography variant="h4" gutterBottom component="div">
          Horizontal Rules
        </Typography>
        <Typography variant="body2" gutterBottom>
          To create a horizontal rule, use three or more asterisks {"(***)"}, dashes {"(---)"}, or underscores {"(___)"} on a line by themselves.
        </Typography>
        <hr/>
      </Box>
      <Box sx={{ width: '90%', maxWidth: 700, margin: 'auto',marginBottom: "30px" }} id="Links">
        <Typography variant="h4" gutterBottom component="div">
          Links
        </Typography>
        <Typography variant="body2" gutterBottom>
          {"To create a link, enclose the link text in brackets (e.g., [Duck Duck Go]) and then follow it immediately with the URL in parentheses (e.g., (https://duckduckgo.com))."}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {"My favorite search engine is [Duck Duck Go](https://duckduckgo.com)."}
        </Typography>

      </Box>
      <Box sx={{ width: '90%', maxWidth: 700, margin: 'auto',marginBottom: "30px" }} id="images">
        <Typography variant="h4" gutterBottom component="div">
          Images
        </Typography>
        <Typography variant="body2" gutterBottom>
          To add an image, add an exclamation mark {"(!)"}, followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title after the URL in the parentheses.
        </Typography>
        <Typography variant="body2" gutterBottom>
          {"![The San Juan Mountains are beautiful!](/assets/images/san-juan-mountains.jpg \"San Juan Mountains\")"}
        </Typography>

      </Box>
      <Box sx={{ width: '90%', maxWidth: 700, margin: 'auto',marginBottom: "30px" }} id="images">
        <Typography variant="h4" gutterBottom component="div">
          Tables
        </Typography>
        <Typography variant="body2" gutterBottom>
        To add a table, use three or more hyphens {"(---)"} to create each column’s header, and use pipes {"(|)"} to separate each column. For compatibility, you should also add a pipe on either end of the row.
        </Typography>
        <Typography variant="body2" gutterBottom>
          {"| Syntax      | Description |"}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {"| ----------- | ----------- |"}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {"| Header       | Title        |"}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {"| Paragraph   | Text        |"}
        </Typography>
      </Box>
      <Box sx={{ width: '90%', maxWidth: 700, margin: 'auto',marginBottom: "30px" }} id="images">
        <Typography variant="h4" gutterBottom component="div">
          Strikethrough
        </Typography>
        <Typography variant="body2" gutterBottom>
        You can strikethrough words by putting a horizontal line through the center of them. The result looks <del>like this</del>. This feature allows you to indicate that certain words are a mistake not meant for inclusion in the document. To strikethrough words, use two tilde symbols {"(~~)"} before and after the words.
        </Typography>
        <Typography variant="body2" gutterBottom>
          {"~~The world is flat.~~ We now know that the world is round."}
        </Typography>
        <Typography variant="body2" gutterBottom>
        The rendered output looks like this:
        </Typography>
        <Typography variant="body2" gutterBottom>
          <del>The world is flat.</del> We now know that the world is round.
        </Typography>
        
      </Box>
      <Box sx={{ width: '90%', maxWidth: 700, margin: 'auto',marginBottom: "30px" }} id="images">
        <Typography variant="h4" gutterBottom component="div">
          Task Lists
        </Typography>
        <Typography variant="body2" gutterBottom>
        Task lists allow you to create a list of items with checkboxes. In Markdown applications that support task lists, checkboxes will be displayed next to the content. To create a task list, add dashes {"(-)"} and brackets with a space {"([ ])"} in front of task list items. To select a checkbox, add an x in between the brackets {"([x])"}.
        </Typography>
        <Typography variant="body2" gutterBottom>
          {"- [x] Write the press release"}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {"- [ ] Update the website"}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {"- [ ] Contact the media"}
        </Typography>
        <Typography variant="body2" gutterBottom>
        The rendered output looks like this:
        </Typography>
        <Typography variant="body2" gutterBottom>
        <Checkbox {...label} disabled checked />{" Write the press release"}
        </Typography>
        <Typography variant="body2" gutterBottom>
        <Checkbox {...label} disabled />{" Update the website"}
        </Typography>
        <Typography variant="body2" gutterBottom>
        <Checkbox {...label} disabled />{" Contact the media"}
        </Typography>
        
      </Box>
    </>
  );
}