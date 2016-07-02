$(document).ready(function(){
  /* 12 */
  ob = $("#ob-contents-container");
  /* 12 */
  secretariat = $("#secretariat-contents-container");
  /* 3 and then 2 */
  sb = $("#sc-contents-container");
  /* 3, 4, 3 */
  cc = $("#cc-contents-container");
  /* 2 */
  jcc = $("#jcc-contents-container");
  /* 20 */
  insta = $("#insta-contents-container");

  /* OB */

  /* Secretariat */
  secretariat_length = 12;
  s_index = 0;
  s_container = "<div class='secretariat-container' onClick='contactSecretariat($(this));'>";
  s_info = "<div class='secretariat-info'>";
  s_contact = "<div class='secretariat-contact' id='secretariat-contact'>";
  s_end = "</div>";

  /*photo = [[url, style string]]*/
  while index < secretariat_length {
    secretariat.append(
      s_container + s_info + s_end +
      "d"
    )
  }

  /* SB */

  /* CC */

  /* JCC */

  /* Instagram */

});
