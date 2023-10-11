<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* @oshop/header.html.twig */
class __TwigTemplate_c040192b6f308e09369e974c16191513 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<!-- <div id=\"ht-preloader\">
    <div class=\"loader clear-loader\"><img src=\"images/loader.gif\" alt=\"\"></div>
</div> -->

<!-- preloader end -->
";
        // line 6
        if (((($context["type"] ?? null) != "homepage") &&  !($context["is_front"] ?? null))) {
            // line 7
            $context["pos"] = "position: relative";
        }
        // line 9
        echo "<!--header start-->
";
        // line 10
        if ((($context["header_style"] ?? null) == "header2")) {
            // line 11
            echo "  <header id=\"site-header\" class=\"header header-2\">
    <div class=\"top-bar theme-bg\">
      <div class=\"container\">
        <div class=\"row align-items-center sm-text-center\">
          <div class=\"col-lg-6 col-md-4\">
            <div class=\"topbar-link\">
                 ";
            // line 17
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 17), 17, $this->source), "html", null, true);
            echo "
            </div>
          </div>
          <div class=\"col-lg-6 col-md-8 text-md-right\">
            <div class=\"topbar-right\">
                ";
            // line 22
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user_account_menu", [], "any", false, false, true, 22), 22, $this->source), "html", null, true);
            echo "
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id=\"header-wrap\" class=\"box-shadow\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-md-12\">
            <nav class=\"navbar navbar-expand-lg\">
              <a class=\"navbar-brand logo\" href=\"";
            // line 33
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->getPath("<front>"));
            echo "\">
              <img id=\"logo-img\" class=\"img-center\" src=\"";
            // line 34
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["logo"] ?? null), 34, $this->source), "html", null, true);
            echo "\" alt=\"\">
              </a>
              <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span></span>
              <span></span>
              <span></span>
              </button>
              <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">
                <!-- Left nav -->
                  ";
            // line 42
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "main_menu", [], "any", false, false, true, 42), 42, $this->source), "html", null, true);
            echo "
              </div>
              <ul class=\"right-nav justify-content-end list-inline\">
                <li class=\"list-inline-item search-icon mr-4\">
                  <div class=\"search-wrap\">
                    <button id=\"btn-search\" class=\"btn-search\"><i class=\"flaticon-search-1\"></i>
                    </button>
                  </div>
                </li>
                <li class=\"list-inline-item\">
                  <div class=\"cart\">
                    ";
            // line 53
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "cart_block", [], "any", false, false, true, 53), 53, $this->source), "html", null, true);
            echo "
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>


";
        } elseif ((        // line 65
($context["header_style"] ?? null) == "header4")) {
            // line 66
            echo "  <header id=\"site-header\" class=\"header header-5\" style = \" ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["pos"] ?? null), 66, $this->source), "html", null, true);
            echo " \">
    <div class=\"top-bar\">
      <div class=\"container\">
        <div class=\"row align-items-center sm-text-center\">
          <div class=\"col-lg-6 col-md-4\">
            <div class=\"topbar-link\">
              ";
            // line 72
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 72), 72, $this->source), "html", null, true);
            echo "
            </div>
          </div>
          <div class=\"col-lg-6 col-md-8 text-md-right\">
            <div class=\"topbar-right\">
              ";
            // line 77
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user_account_menu", [], "any", false, false, true, 77), 77, $this->source), "html", null, true);
            echo "
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id=\"header-wrap\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-md-12\">
            <nav class=\"navbar navbar-expand-lg\">
              <a class=\"navbar-brand logo\" href=\"";
            // line 88
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->getPath("<front>"));
            echo "\">
                <img id=\"logo-img\" class=\"img-center\" src=\"";
            // line 89
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["logo"] ?? null), 89, $this->source), "html", null, true);
            echo "\" alt=\"\">
              </a>
              <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span></span>
                <span></span>
                <span></span>
              </button>
              <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">
                <!-- Left nav -->
                 ";
            // line 97
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "main_menu", [], "any", false, false, true, 97), 97, $this->source), "html", null, true);
            echo "
              </div>
              <ul class=\"right-nav justify-content-end list-inline\">
                <li class=\"list-inline-item search-icon mr-4\">
                  <div class=\"search-wrap\">
                    <button id=\"btn-search\" class=\"btn-search\"><i class=\"flaticon-search-1\"></i>
                    </button>
                  </div>
                </li>
                <li class=\"list-inline-item\">
                  <div class=\"cart\"> 
                     ";
            // line 108
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "cart_block", [], "any", false, false, true, 108), 108, $this->source), "html", null, true);
            echo "
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
";
        } elseif ((        // line 118
($context["header_style"] ?? null) == "header5")) {
            // line 119
            echo "  <header id=\"site-header\" class=\"header\">
    <div id=\"header-wrap\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-md-12\">
            <nav class=\"navbar navbar-expand-lg\">
              <a class=\"navbar-brand logo\" href=\"";
            // line 125
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->getPath("<front>"));
            echo "\">
                <img id=\"logo-white-img\" class=\"img-center\" src=\"";
            // line 126
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["logo"] ?? null), 126, $this->source), "html", null, true);
            echo "\" alt=\"\">
              </a>
              <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span></span>
                <span></span>
                <span></span>
              </button>
              <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">
                <!-- Left nav -->
                ";
            // line 134
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "main_menu", [], "any", false, false, true, 134), 134, $this->source), "html", null, true);
            echo "
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>     
";
        } elseif ((        // line 142
($context["header_style"] ?? null) == "header6")) {
            // line 143
            echo "  <header id=\"site-header\" class=\"header header-4\">
    <div class=\"top-bar dark-bg\">
      <div class=\"container\">
        <div class=\"row align-items-center sm-text-center\">
          <div class=\"col-lg-6 col-md-4\">
            <div class=\"social-icons\">
                 ";
            // line 149
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "soc_network", [], "any", false, false, true, 149), 149, $this->source), "html", null, true);
            echo "
            </div>
          </div>
          <div class=\"col-lg-6 col-md-8 text-md-right\">
            <div class=\"topbar-right\">
                ";
            // line 154
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user_account_menu", [], "any", false, false, true, 154), 154, $this->source), "html", null, true);
            echo "
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=\"header-middle\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-md-12 d-flex justify-content-between align-items-center\">
            <h5 class=\"text-lowercase mb-0\">
               ";
            // line 165
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["email"] ?? null), 165, $this->source));
            echo "
            </h5>
                ";
            // line 167
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "search_header", [], "any", false, false, true, 167), 167, $this->source), "html", null, true);
            echo "
            <h5 class=\"text-capitalize mb-0\">
                ";
            // line 169
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["phone_number"] ?? null), 169, $this->source));
            echo "
            </h5> 
          </div>
        </div>
      </div>
    </div>
    <div id=\"header-wrap\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-md-12\">
            <nav class=\"navbar navbar-expand-lg\">
              <a class=\"navbar-brand logo\" href=\"";
            // line 180
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->getPath("<front>"));
            echo "\">
                <img id=\"logo-img\" class=\"img-center\" src=\"";
            // line 181
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["logo"] ?? null), 181, $this->source), "html", null, true);
            echo "\" alt=\"\">
              </a>
              <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span></span>
                <span></span>
                <span></span>
              </button>
              <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">
                <!-- Left nav -->
                ";
            // line 189
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "main_menu", [], "any", false, false, true, 189), 189, $this->source), "html", null, true);
            echo "
              </div>
              <ul class=\"right-nav justify-content-end list-inline\">
                <li class=\"list-inline-item search-icon mr-4\">
                  <div class=\"search-wrap\">
                    <button id=\"btn-search\" class=\"btn-search\"><i class=\"flaticon-search-1\"></i>
                    </button>
                  </div>
                </li>
                <li class=\"list-inline-item\">
                  <div class=\"cart\"> 
                      ";
            // line 200
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "cart_block", [], "any", false, false, true, 200), 200, $this->source), "html", null, true);
            echo "
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
";
        } elseif ((        // line 210
($context["header_style"] ?? null) == "header3")) {
            // line 211
            echo "  <header id=\"site-header\" class=\"header header-3\" style = \" ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["pos"] ?? null), 211, $this->source), "html", null, true);
            echo " \">
    <div class=\"top-bar dark-bg\">
      <div class=\"container\">
        <div class=\"row align-items-center sm-text-center\">
          <div class=\"col-lg-6 col-md-4\">
             ";
            // line 216
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "soc_network", [], "any", false, false, true, 216), 216, $this->source), "html", null, true);
            echo "
          </div>
          <div class=\"col-lg-6 col-md-8 text-md-right\">
            <div class=\"topbar-right\">
               ";
            // line 220
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user_account_menu", [], "any", false, false, true, 220), 220, $this->source), "html", null, true);
            echo "
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=\"header-middle\">
      <div class=\"container\">
        <div class=\"row align-items-center\">
          <div class=\"col-md-12 d-flex justify-content-between\">
              ";
            // line 230
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "categories_menu", [], "any", false, false, true, 230), 230, $this->source), "html", null, true);
            echo "
            <a class=\"navbar-brand logo\" href=\"";
            // line 231
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->getPath("<front>"));
            echo "\">
            <img id=\"logo-img\" class=\"img-center\" src=\"";
            // line 232
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["logo"] ?? null), 232, $this->source), "html", null, true);
            echo "\" alt=\"\">
            </a>
            <ul class=\"right-nav d-flex justify-content-end list-inline\">
              <li class=\"list-inline-item search-icon mr-4\">
                <div class=\"search-wrap\">
                  <button id=\"btn-search\" class=\"btn-search\"><i class=\"flaticon-search-1\"></i>
                  </button>
                </div>
              </li>
              <li class=\"list-inline-item\">
                 ";
            // line 242
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "cart_block", [], "any", false, false, true, 242), 242, $this->source), "html", null, true);
            echo "
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id=\"header-wrap\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-md-12\">
            <nav class=\"navbar navbar-expand-lg\">
              <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span></span>
              <span></span>
              <span></span>
              </button>
              <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">
                <!-- Left nav -->
                ";
            // line 260
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "main_menu", [], "any", false, false, true, 260), 260, $this->source), "html", null, true);
            echo "
              </div>
              <div class=\"header-link\">
               ";
            // line 263
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["phone_number"] ?? null), 263, $this->source));
            echo "
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
";
        } else {
            // line 272
            echo "  <header id=\"site-header\" class=\"header\">
    <div class=\"top-bar\">
      <div class=\"container\">
        <div class=\"row align-items-center sm-text-center\">
          <div class=\"col-lg-6 col-md-4\">
            <div class=\"topbar-link\">
                 ";
            // line 278
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 278), 278, $this->source), "html", null, true);
            echo "
            </div>
          </div>
          <div class=\"col-lg-6 col-md-8 text-md-right\">
            <div class=\"topbar-right\">
               ";
            // line 283
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user_account_menu", [], "any", false, false, true, 283), 283, $this->source), "html", null, true);
            echo "
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id=\"header-wrap\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-md-12\">
            <nav class=\"navbar navbar-expand-lg\">
              <a class=\"navbar-brand logo\" href=\"";
            // line 294
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->getPath("<front>"));
            echo "\">
                <img id=\"logo-img\" class=\"img-center\" src=\"";
            // line 295
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["logo"] ?? null), 295, $this->source), "html", null, true);
            echo "\" alt=\"\">
              </a>
              <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span></span>
                <span></span>
                <span></span>
              </button>
              <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">
                <!-- Left nav -->
                  ";
            // line 303
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "main_menu", [], "any", false, false, true, 303), 303, $this->source), "html", null, true);
            echo "
              </div>
              <ul class=\"right-nav justify-content-end list-inline\">
                <li class=\"list-inline-item search-icon mr-4\">
                  <div class=\"search-wrap\">
                    <button id=\"btn-search\" class=\"btn-search\"><i class=\"flaticon-search-1\"></i>
                    </button>
                  </div>
                </li>
                <li class=\"list-inline-item\">
                  <div class=\"cart\"> 
                     ";
            // line 314
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "cart_block", [], "any", false, false, true, 314), 314, $this->source), "html", null, true);
            echo "
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
";
        }
        // line 325
        echo "
  <div class=\"search update-search-input\">
      <button id=\"btn-search-close\" class=\"btn-search-close\" aria-label=\"Close search form\"><i class=\"flaticon-cancel\"></i>
      </button>
      ";
        // line 329
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "search_page", [], "any", false, false, true, 329), 329, $this->source), "html", null, true);
        echo "
     <!--  <form class=\"search-form\">
          <input class=\"search-input\" name=\"search\" type=\"search\" placeholder=\"drones\" /> <span class=\"search-info\">Hit enter to search or ESC to close</span>
      </form> -->
  </div>
  <!--header end-->
<!--page title start-->
";
        // line 336
        if (((($context["type"] ?? null) != "homepage") &&  !($context["is_front"] ?? null))) {
            // line 337
            echo "<section class=\"page-title o-hidden\" data-bg-img=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["theme_page_header_bg"] ?? null), 337, $this->source), "html", null, true);
            echo "\">
    <div class=\"container\">
        <div class=\"row align-items-center\">
            <div class=\"col-lg-12 col-md-12\">
             
                 ";
            // line 342
            $context["title"] = twig_split_filter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["title"] ?? null), 342, $this->source)), " ");
            echo " 
                
                <h1 class=\"mb-3\">";
            // line 344
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["title"] ?? null), 0, [], "any", false, false, true, 344), 344, $this->source), "html", null, true);
            echo "  <span class=\"text-theme\">
                    ";
            // line 345
            $context["k"] = 0;
            // line 346
            echo "                    ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["title"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["tit"]) {
                // line 347
                echo "                    ";
                $context["k"] = (($context["k"] ?? null) + 1);
                // line 348
                echo "                    ";
                if ((($context["k"] ?? null) > 1)) {
                    // line 349
                    echo "                    ";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["tit"], 349, $this->source), "html", null, true);
                    echo "
                    ";
                }
                // line 351
                echo "                    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['tit'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 352
            echo "                 </span></h1>

                  ";
            // line 354
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "breadcrumb", [], "any", false, false, true, 354), 354, $this->source), "html", null, true);
            echo "
            </div>
        </div>
    </div>
</section>
";
        } elseif ((        // line 359
($context["header_style"] ?? null) == "header2")) {
            // line 360
            echo "<section class=\"p-0 mt-lg-3\">
  <div class=\"container\">
    <div class=\"row\">
      <div class=\"col-lg-4 col-md-12\">
        <nav class=\"navbar navbar-expand-lg navbar-2\">
          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown2\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span></span>
            <span></span>
            <span></span>
          </button>
            <!-- Left nav -->
          ";
            // line 370
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "categories_menu", [], "any", false, false, true, 370), 370, $this->source), "html", null, true);
            echo "
        </nav>
      </div>
         ";
            // line 373
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "slide", [], "any", false, false, true, 373), 373, $this->source), "html", null, true);
            echo "
        <!-- /slider-wrapper -->
    </div>
  </div>
</section>

";
        } else {
            // line 380
            echo "    ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "slide", [], "any", false, false, true, 380), 380, $this->source), "html", null, true);
            echo "
";
        }
    }

    public function getTemplateName()
    {
        return "@oshop/header.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  607 => 380,  597 => 373,  591 => 370,  579 => 360,  577 => 359,  569 => 354,  565 => 352,  559 => 351,  553 => 349,  550 => 348,  547 => 347,  542 => 346,  540 => 345,  536 => 344,  531 => 342,  522 => 337,  520 => 336,  510 => 329,  504 => 325,  490 => 314,  476 => 303,  465 => 295,  461 => 294,  447 => 283,  439 => 278,  431 => 272,  419 => 263,  413 => 260,  392 => 242,  379 => 232,  375 => 231,  371 => 230,  358 => 220,  351 => 216,  342 => 211,  340 => 210,  327 => 200,  313 => 189,  302 => 181,  298 => 180,  284 => 169,  279 => 167,  274 => 165,  260 => 154,  252 => 149,  244 => 143,  242 => 142,  231 => 134,  220 => 126,  216 => 125,  208 => 119,  206 => 118,  193 => 108,  179 => 97,  168 => 89,  164 => 88,  150 => 77,  142 => 72,  132 => 66,  130 => 65,  115 => 53,  101 => 42,  90 => 34,  86 => 33,  72 => 22,  64 => 17,  56 => 11,  54 => 10,  51 => 9,  48 => 7,  46 => 6,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!-- <div id=\"ht-preloader\">
    <div class=\"loader clear-loader\"><img src=\"images/loader.gif\" alt=\"\"></div>
</div> -->

<!-- preloader end -->
{% if type != 'homepage' and not is_front %}
{% set pos =   'position: relative'  %}
{% endif %}
<!--header start-->
{% if header_style == 'header2' %}
  <header id=\"site-header\" class=\"header header-2\">
    <div class=\"top-bar theme-bg\">
      <div class=\"container\">
        <div class=\"row align-items-center sm-text-center\">
          <div class=\"col-lg-6 col-md-4\">
            <div class=\"topbar-link\">
                 {{ page.header }}
            </div>
          </div>
          <div class=\"col-lg-6 col-md-8 text-md-right\">
            <div class=\"topbar-right\">
                {{ page.user_account_menu }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id=\"header-wrap\" class=\"box-shadow\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-md-12\">
            <nav class=\"navbar navbar-expand-lg\">
              <a class=\"navbar-brand logo\" href=\"{{ path('<front>') }}\">
              <img id=\"logo-img\" class=\"img-center\" src=\"{{ logo }}\" alt=\"\">
              </a>
              <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span></span>
              <span></span>
              <span></span>
              </button>
              <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">
                <!-- Left nav -->
                  {{ page.main_menu }}
              </div>
              <ul class=\"right-nav justify-content-end list-inline\">
                <li class=\"list-inline-item search-icon mr-4\">
                  <div class=\"search-wrap\">
                    <button id=\"btn-search\" class=\"btn-search\"><i class=\"flaticon-search-1\"></i>
                    </button>
                  </div>
                </li>
                <li class=\"list-inline-item\">
                  <div class=\"cart\">
                    {{ page.cart_block}}
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>


{% elseif  header_style == 'header4' %}
  <header id=\"site-header\" class=\"header header-5\" style = \" {{ pos }} \">
    <div class=\"top-bar\">
      <div class=\"container\">
        <div class=\"row align-items-center sm-text-center\">
          <div class=\"col-lg-6 col-md-4\">
            <div class=\"topbar-link\">
              {{ page.header }}
            </div>
          </div>
          <div class=\"col-lg-6 col-md-8 text-md-right\">
            <div class=\"topbar-right\">
              {{ page.user_account_menu }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id=\"header-wrap\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-md-12\">
            <nav class=\"navbar navbar-expand-lg\">
              <a class=\"navbar-brand logo\" href=\"{{ path('<front>') }}\">
                <img id=\"logo-img\" class=\"img-center\" src=\"{{ logo }}\" alt=\"\">
              </a>
              <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span></span>
                <span></span>
                <span></span>
              </button>
              <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">
                <!-- Left nav -->
                 {{ page.main_menu }}
              </div>
              <ul class=\"right-nav justify-content-end list-inline\">
                <li class=\"list-inline-item search-icon mr-4\">
                  <div class=\"search-wrap\">
                    <button id=\"btn-search\" class=\"btn-search\"><i class=\"flaticon-search-1\"></i>
                    </button>
                  </div>
                </li>
                <li class=\"list-inline-item\">
                  <div class=\"cart\"> 
                     {{ page.cart_block}}
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
{% elseif  header_style == 'header5' %}
  <header id=\"site-header\" class=\"header\">
    <div id=\"header-wrap\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-md-12\">
            <nav class=\"navbar navbar-expand-lg\">
              <a class=\"navbar-brand logo\" href=\"{{ path('<front>') }}\">
                <img id=\"logo-white-img\" class=\"img-center\" src=\"{{ logo }}\" alt=\"\">
              </a>
              <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span></span>
                <span></span>
                <span></span>
              </button>
              <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">
                <!-- Left nav -->
                {{ page.main_menu }}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>     
{% elseif  header_style == 'header6' %}
  <header id=\"site-header\" class=\"header header-4\">
    <div class=\"top-bar dark-bg\">
      <div class=\"container\">
        <div class=\"row align-items-center sm-text-center\">
          <div class=\"col-lg-6 col-md-4\">
            <div class=\"social-icons\">
                 {{ page.soc_network }}
            </div>
          </div>
          <div class=\"col-lg-6 col-md-8 text-md-right\">
            <div class=\"topbar-right\">
                {{ page.user_account_menu }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=\"header-middle\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-md-12 d-flex justify-content-between align-items-center\">
            <h5 class=\"text-lowercase mb-0\">
               {{ email|raw }}
            </h5>
                {{ page.search_header }}
            <h5 class=\"text-capitalize mb-0\">
                {{ phone_number|raw }}
            </h5> 
          </div>
        </div>
      </div>
    </div>
    <div id=\"header-wrap\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-md-12\">
            <nav class=\"navbar navbar-expand-lg\">
              <a class=\"navbar-brand logo\" href=\"{{ path('<front>') }}\">
                <img id=\"logo-img\" class=\"img-center\" src=\"{{ logo }}\" alt=\"\">
              </a>
              <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span></span>
                <span></span>
                <span></span>
              </button>
              <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">
                <!-- Left nav -->
                {{ page.main_menu }}
              </div>
              <ul class=\"right-nav justify-content-end list-inline\">
                <li class=\"list-inline-item search-icon mr-4\">
                  <div class=\"search-wrap\">
                    <button id=\"btn-search\" class=\"btn-search\"><i class=\"flaticon-search-1\"></i>
                    </button>
                  </div>
                </li>
                <li class=\"list-inline-item\">
                  <div class=\"cart\"> 
                      {{ page.cart_block}}
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
{% elseif  header_style == 'header3' %}
  <header id=\"site-header\" class=\"header header-3\" style = \" {{ pos }} \">
    <div class=\"top-bar dark-bg\">
      <div class=\"container\">
        <div class=\"row align-items-center sm-text-center\">
          <div class=\"col-lg-6 col-md-4\">
             {{ page.soc_network }}
          </div>
          <div class=\"col-lg-6 col-md-8 text-md-right\">
            <div class=\"topbar-right\">
               {{ page.user_account_menu }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=\"header-middle\">
      <div class=\"container\">
        <div class=\"row align-items-center\">
          <div class=\"col-md-12 d-flex justify-content-between\">
              {{ page.categories_menu}}
            <a class=\"navbar-brand logo\" href=\"{{ path('<front>') }}\">
            <img id=\"logo-img\" class=\"img-center\" src=\"{{ logo }}\" alt=\"\">
            </a>
            <ul class=\"right-nav d-flex justify-content-end list-inline\">
              <li class=\"list-inline-item search-icon mr-4\">
                <div class=\"search-wrap\">
                  <button id=\"btn-search\" class=\"btn-search\"><i class=\"flaticon-search-1\"></i>
                  </button>
                </div>
              </li>
              <li class=\"list-inline-item\">
                 {{ page.cart_block}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id=\"header-wrap\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-md-12\">
            <nav class=\"navbar navbar-expand-lg\">
              <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span></span>
              <span></span>
              <span></span>
              </button>
              <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">
                <!-- Left nav -->
                {{ page.main_menu }}
              </div>
              <div class=\"header-link\">
               {{ phone_number|raw}}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
{% else %}
  <header id=\"site-header\" class=\"header\">
    <div class=\"top-bar\">
      <div class=\"container\">
        <div class=\"row align-items-center sm-text-center\">
          <div class=\"col-lg-6 col-md-4\">
            <div class=\"topbar-link\">
                 {{ page.header }}
            </div>
          </div>
          <div class=\"col-lg-6 col-md-8 text-md-right\">
            <div class=\"topbar-right\">
               {{ page.user_account_menu }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id=\"header-wrap\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-md-12\">
            <nav class=\"navbar navbar-expand-lg\">
              <a class=\"navbar-brand logo\" href=\"{{ path('<front>') }}\">
                <img id=\"logo-img\" class=\"img-center\" src=\"{{ logo }}\" alt=\"\">
              </a>
              <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span></span>
                <span></span>
                <span></span>
              </button>
              <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">
                <!-- Left nav -->
                  {{ page.main_menu }}
              </div>
              <ul class=\"right-nav justify-content-end list-inline\">
                <li class=\"list-inline-item search-icon mr-4\">
                  <div class=\"search-wrap\">
                    <button id=\"btn-search\" class=\"btn-search\"><i class=\"flaticon-search-1\"></i>
                    </button>
                  </div>
                </li>
                <li class=\"list-inline-item\">
                  <div class=\"cart\"> 
                     {{ page.cart_block}}
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
{% endif %}

  <div class=\"search update-search-input\">
      <button id=\"btn-search-close\" class=\"btn-search-close\" aria-label=\"Close search form\"><i class=\"flaticon-cancel\"></i>
      </button>
      {{ page.search_page}}
     <!--  <form class=\"search-form\">
          <input class=\"search-input\" name=\"search\" type=\"search\" placeholder=\"drones\" /> <span class=\"search-info\">Hit enter to search or ESC to close</span>
      </form> -->
  </div>
  <!--header end-->
<!--page title start-->
{% if type != 'homepage' and not is_front %}
<section class=\"page-title o-hidden\" data-bg-img=\"{{ theme_page_header_bg }}\">
    <div class=\"container\">
        <div class=\"row align-items-center\">
            <div class=\"col-lg-12 col-md-12\">
             
                 {% set title = title|render|split(' ') %} 
                
                <h1 class=\"mb-3\">{{ title.0 }}  <span class=\"text-theme\">
                    {% set k = 0 %}
                    {% for tit in title %}
                    {% set k = k + 1 %}
                    {% if k > 1 %}
                    {{ tit }}
                    {% endif %}
                    {% endfor %}
                 </span></h1>

                  {{ page.breadcrumb }}
            </div>
        </div>
    </div>
</section>
{% elseif header_style == 'header2' %}
<section class=\"p-0 mt-lg-3\">
  <div class=\"container\">
    <div class=\"row\">
      <div class=\"col-lg-4 col-md-12\">
        <nav class=\"navbar navbar-expand-lg navbar-2\">
          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown2\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span></span>
            <span></span>
            <span></span>
          </button>
            <!-- Left nav -->
          {{ page.categories_menu}}
        </nav>
      </div>
         {{ page.slide }}
        <!-- /slider-wrapper -->
    </div>
  </div>
</section>

{% else %}
    {{ page.slide }}
{% endif %}", "@oshop/header.html.twig", "/var/www/html/themes/oshop/templates/header.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 6, "set" => 7, "for" => 346);
        static $filters = array("escape" => 17, "raw" => 165, "split" => 342, "render" => 342);
        static $functions = array("path" => 33);

        try {
            $this->sandbox->checkSecurity(
                ['if', 'set', 'for'],
                ['escape', 'raw', 'split', 'render'],
                ['path']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
