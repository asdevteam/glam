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

/* themes/oshop/templates/views-view.html.twig */
class __TwigTemplate_6f0895aa38e2321ea4e1fcfaa5d47c13 extends \Twig\Template
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
        if ((($context["id"] ?? null) == "blog")) {
            // line 2
            echo "    ";
            if ((($context["display_id"] ?? null) == "blog_masonry_")) {
                echo " 
        <div class=\"row\">
            <div class=\"col-md-12\">
                <div class=\"masonry columns-3 row\">
                     ";
                // line 6
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 6, $this->source), "html", null, true);
                echo "
                </div>
            </div>
        </div>
        <div class=\"row mt-2\">
          <div class=\"col-sm-12\">
            ";
                // line 12
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["pager"] ?? null), 12, $this->source), "html", null, true);
                echo "
          </div>
        </div>
    ";
            } elseif ((            // line 15
($context["display_id"] ?? null) == "blog_home1")) {
                // line 16
                echo "        <section class=\"grey-bg\">
            <div class=\"container\">
                <div class=\"row text-center\">
                  <div class=\"col-lg-8 col-md-12 ml-auto mr-auto\">
                    <div class=\"section-title\">
                      ";
                // line 21
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header"] ?? null), 21, $this->source), "html", null, true);
                echo "
                    </div>
                  </div>
                </div>
                <div class=\"row\">
            ";
                // line 26
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable((($__internal_compile_0 = twig_get_attribute($this->env, $this->source, ($context["rows"] ?? null), 0, [], "any", false, false, true, 26)) && is_array($__internal_compile_0) || $__internal_compile_0 instanceof ArrayAccess ? ($__internal_compile_0["#rows"] ?? null) : null));
                foreach ($context['_seq'] as $context["i"] => $context["row"]) {
                    // line 27
                    echo "                ";
                    if (($context["i"] == 0)) {
                        // line 28
                        echo "                     <div class=\"col-lg-4 col-md-6 col-sm-6\">
                ";
                    } elseif ((                    // line 29
$context["i"] == 1)) {
                        // line 30
                        echo "                       <div class=\"col-lg-4 col-md-6 col-sm-6 xs-mt-5\">  
                ";
                    } elseif ((                    // line 31
$context["i"] == 2)) {
                        // line 32
                        echo "                       <div class=\"col-lg-4 col-md-6 col-sm-6 md-mt-5\">  
                ";
                    } else {
                        // line 34
                        echo "                     <div class=\"col-lg-4 col-md-6 col-sm-6 mt-5\">
                ";
                    }
                    // line 36
                    echo "                  ";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["row"], 36, $this->source), "html", null, true);
                    echo "
                 </div>
            ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['i'], $context['row'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 39
                echo "                </div>
          
            </div>
        </section>
    ";
            } elseif ((            // line 43
($context["display_id"] ?? null) == "page_blog")) {
                // line 44
                echo "        <section>
            <div class=\"container\">
                <div class=\"row\">
            ";
                // line 47
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable((($__internal_compile_1 = twig_get_attribute($this->env, $this->source, ($context["rows"] ?? null), 0, [], "any", false, false, true, 47)) && is_array($__internal_compile_1) || $__internal_compile_1 instanceof ArrayAccess ? ($__internal_compile_1["#rows"] ?? null) : null));
                foreach ($context['_seq'] as $context["i"] => $context["row"]) {
                    // line 48
                    echo "                ";
                    if (($context["i"] == 0)) {
                        // line 49
                        echo "                     <div class=\"col-lg-4 col-md-6 col-sm-6\">
                ";
                    } elseif ((                    // line 50
$context["i"] == 1)) {
                        // line 51
                        echo "                       <div class=\"col-lg-4 col-md-6 col-sm-6 xs-mt-5\">  
                ";
                    } elseif ((                    // line 52
$context["i"] == 2)) {
                        // line 53
                        echo "                       <div class=\"col-lg-4 col-md-6 col-sm-6 md-mt-5\">  
                ";
                    } else {
                        // line 55
                        echo "                     <div class=\"col-lg-4 col-md-6 col-sm-6 mt-5\">
                ";
                    }
                    // line 57
                    echo "                  ";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["row"], 57, $this->source), "html", null, true);
                    echo "
                 </div>
            ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['i'], $context['row'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 60
                echo "                </div>
                <div class=\"row mt-5 text-center\">
                    <div class=\"col-md-12 justify-content-center\">     
                        ";
                // line 63
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["pager"] ?? null), 63, $this->source), "html", null, true);
                echo "
                    </div>
                </div>
            </div>
        </section>
    ";
            } else {
                // line 69
                echo "        ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["exposed"] ?? null), 69, $this->source), "html", null, true);
                echo "
        <div";
                // line 70
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attributes"] ?? null), 70, $this->source), "html", null, true);
                echo ">
            ";
                // line 71
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_prefix"] ?? null), 71, $this->source), "html", null, true);
                echo "
            ";
                // line 72
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null), 72, $this->source), "html", null, true);
                echo "
            ";
                // line 73
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_suffix"] ?? null), 73, $this->source), "html", null, true);
                echo "
            
            ";
                // line 75
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header"] ?? null), 75, $this->source), "html", null, true);
                echo "
            ";
                // line 76
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attachment_before"] ?? null), 76, $this->source), "html", null, true);
                echo "
                ";
                // line 77
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 77, $this->source), "html", null, true);
                echo "
            ";
                // line 78
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer"] ?? null), 78, $this->source), "html", null, true);
                echo "
            ";
                // line 79
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["pager"] ?? null), 79, $this->source), "html", null, true);
                echo "
            ";
                // line 80
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attachment_after"] ?? null), 80, $this->source), "html", null, true);
                echo "
            ";
                // line 81
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["more"] ?? null), 81, $this->source), "html", null, true);
                echo "
            ";
                // line 82
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["feed_icons"] ?? null), 82, $this->source), "html", null, true);
                echo "
        </div>
    ";
            }
        } elseif ((        // line 85
($context["id"] ?? null) == "logo_client_block")) {
            // line 86
            echo "   ";
            if ((($context["display_id"] ?? null) == "logo_client_block_")) {
                // line 87
                echo "      <div class=\"row client-logo mt-10\">
        <div class=\"col-md-12\">
            <div class=\"owl-carousel owl-theme no-pb\" data-dots=\"false\" data-items=\"5\" data-md-items=\"4\" data-sm-items=\"3\" data-margin=\"30\" data-autoplay=\"true\">
                ";
                // line 90
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 90, $this->source), "html", null, true);
                echo "
            </div>
        </div>
      </div>
   ";
            } else {
                // line 95
                echo "      ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 95, $this->source), "html", null, true);
                echo "
   ";
            }
        } elseif ((        // line 97
($context["id"] ?? null) == "product_filter_sidebar_price")) {
            // line 98
            echo "  
  ";
            // line 99
            if ((($context["display_id"] ?? null) == "top_product_home_1")) {
                // line 100
                echo "      <section class=\"product-left-side\">
          <div class=\"container\">
            <div class=\"row\">
              <div class=\"col-lg-4 col-md-12 update-mb4\">
                  ";
                // line 104
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header"] ?? null), 104, $this->source), "html", null, true);
                echo "
                  ";
                // line 105
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 105, $this->source), "html", null, true);
                echo "
              </div>
             
                    ";
                // line 108
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer"] ?? null), 108, $this->source), "html", null, true);
                echo "
     
            
            </div>
          </div>
        </section>
  ";
            } elseif ((            // line 114
($context["display_id"] ?? null) == "product_gird_3_hot_and_sale")) {
                // line 115
                echo "        <section>
          <div class=\"container\">
            <div class=\"row text-center\">
              <div class=\"col-lg-8 col-md-12 ml-auto mr-auto\">
                <div class=\"section-title\">
                  ";
                // line 120
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer"] ?? null), 120, $this->source), "html", null, true);
                echo "
                </div>
                  ";
                // line 122
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header"] ?? null), 122, $this->source), "html", null, true);
                echo "
              </div>
            </div>
            <div class=\"row\">
              <div class=\"col-lg-12 col-md-12\">
                <div class=\"grid row columns-3\">
                      ";
                // line 128
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 128, $this->source), "html", null, true);
                echo "
                </div>
              </div>
            </div>
          </div>
        </section>
  ";
            } elseif ((            // line 134
($context["display_id"] ?? null) == "top_on_sale")) {
                // line 135
                echo "      <div class=\"col-lg-4 col-md-12 md-mt-3 sm-mt-5 update-mb4\">
           ";
                // line 136
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header"] ?? null), 136, $this->source), "html", null, true);
                echo "
            ";
                // line 137
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 137, $this->source), "html", null, true);
                echo "
      </div>
  ";
            } elseif ((            // line 139
($context["display_id"] ?? null) == "most_popular_home1")) {
                // line 140
                echo "    <div class=\"col-lg-4 col-md-12 md-mt-3 sm-mt-5 update-mb4\">
      ";
                // line 141
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header"] ?? null), 141, $this->source), "html", null, true);
                echo "
      ";
                // line 142
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 142, $this->source), "html", null, true);
                echo "
   
    </div>
       ";
                // line 145
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer"] ?? null), 145, $this->source), "html", null, true);
                echo "
  ";
            } else {
                // line 147
                echo "        <div class=\"row mb-5 align-items-center fix-mt-5\">
              <div class=\"col-md-5\">
                <h5 class=\"text-capitalize mb-0\">";
                // line 149
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header"] ?? null), 149, $this->source), "html", null, true);
                echo "</h5>
              </div>
              <div class=\"col-md-7 sm-mt-3 d-sm-flex justify-content-md-end align-items-center\">
                <div class=\"sort-filter mr-4 d-flex align-items-center\">
                ";
                // line 153
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["exposed"] ?? null), 153, $this->source), "html", null, true);
                echo "

                  </div>
                </div>
                
        </div>
                ";
                // line 159
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 159, $this->source), "html", null, true);
                echo "
            ";
                // line 160
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["pager"] ?? null), 160, $this->source), "html", null, true);
                echo "
  ";
            }
        } elseif ((        // line 162
($context["id"] ?? null) == "testimonial")) {
            // line 163
            if ((($context["display_id"] ?? null) == "testimonials_home_1")) {
                // line 164
                echo "    ";
                if ((($context["header_style"] ?? null) == "header6")) {
                    // line 165
                    echo "    <section class=\"text-center testimonial dark-bg jarallax\" data-bg-img=\"";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header"] ?? null), 165, $this->source), "html", null, true);
                    echo "\" data-overlay=\"9\">
    ";
                } else {
                    // line 167
                    echo "    <section class=\"grey-bg text-center testimonial\">
    ";
                }
                // line 169
                echo "        <div class=\"container\">
          <div class=\"row text-center\">
            <div class=\"col-xl-8 col-lg-10 col-md-12 ml-auto mr-auto\">
              <div class=\"tab\">
                <!-- Tab panes -->
                <div class=\"tab-content\" id=\"nav-tabContent\">
                  ";
                // line 175
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable((($__internal_compile_2 = twig_get_attribute($this->env, $this->source, ($context["rows"] ?? null), 0, [], "any", false, false, true, 175)) && is_array($__internal_compile_2) || $__internal_compile_2 instanceof ArrayAccess ? ($__internal_compile_2["#rows"] ?? null) : null));
                foreach ($context['_seq'] as $context["i"] => $context["row"]) {
                    // line 176
                    echo "                      ";
                    if (($context["i"] == 0)) {
                        // line 177
                        echo "                           <div role=\"tabpanel\" class=\"tab-pane fade show active\" id=\"tab1-";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["i"], 177, $this->source), "html", null, true);
                        echo "\">
                      ";
                    } else {
                        // line 179
                        echo "                           <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"tab1-";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["i"], 179, $this->source), "html", null, true);
                        echo "\">
                      ";
                    }
                    // line 181
                    echo "                        ";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["row"], 181, $this->source), "html", null, true);
                    echo "
                       </div>
                  ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['i'], $context['row'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 184
                echo "                </div>
                <!-- Nav tabs -->
                  ";
                // line 186
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attachment_after"] ?? null), 186, $this->source), "html", null, true);
                echo "
              </div>
            </div>
          </div>
        </div>
    </section>

";
            } elseif ((            // line 193
($context["display_id"] ?? null) == "attachment_1")) {
                // line 194
                echo "    <nav>
      <div class=\"nav nav-tabs mt-5\" id=\"nav-tab\" role=\"tablist\">

            ";
                // line 197
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable((($__internal_compile_3 = twig_get_attribute($this->env, $this->source, ($context["rows"] ?? null), 0, [], "any", false, false, true, 197)) && is_array($__internal_compile_3) || $__internal_compile_3 instanceof ArrayAccess ? ($__internal_compile_3["#rows"] ?? null) : null));
                foreach ($context['_seq'] as $context["i"] => $context["row"]) {
                    // line 198
                    echo "                ";
                    if (($context["i"] == 0)) {
                        // line 199
                        echo "                    <a class=\"nav-item nav-link active\" id=\"nav-tab2\" data-toggle=\"tab\" href=\"#tab1-";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["i"], 199, $this->source), "html", null, true);
                        echo "\" role=\"tab\" aria-selected=\"false\">
                ";
                    } else {
                        // line 201
                        echo "                   <a class=\"nav-item nav-link\" id=\"nav-tab2\" data-toggle=\"tab\" href=\"#tab1-";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["i"], 201, $this->source), "html", null, true);
                        echo "\" role=\"tab\" aria-selected=\"false\">
                ";
                    }
                    // line 203
                    echo "                  ";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["row"], 203, $this->source), "html", null, true);
                    echo "
                 </a>
            ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['i'], $context['row'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 206
                echo "      </div>
    </nav>
";
            } else {
            }
            // line 210
            echo "
";
        } elseif ((        // line 211
($context["id"] ?? null) == "product_content_block")) {
            // line 212
            echo "    ";
            if (((($context["display_id"] ?? null) == "product_left_sidebar_api") || (($context["display_id"] ?? null) == "product_categories_api"))) {
                echo " 
            <div class=\"row mb-5 align-items-center\">
              <div class=\"col-md-5\">
                <h5 class=\"text-capitalize mb-0\">";
                // line 215
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header"] ?? null), 215, $this->source), "html", null, true);
                echo "</h5>
              </div>
              <div class=\"col-md-7 sm-mt-3 d-sm-flex justify-content-md-end align-items-center\">
                <div class=\"sort-filter mr-4 d-flex align-items-center\">
                  ";
                // line 219
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["exposed"] ?? null), 219, $this->source), "html", null, true);
                echo "
                </div>
              </div>
            </div>
                <div class=\"row\">      
            ";
                // line 224
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable((($__internal_compile_4 = twig_get_attribute($this->env, $this->source, ($context["rows"] ?? null), 0, [], "any", false, false, true, 224)) && is_array($__internal_compile_4) || $__internal_compile_4 instanceof ArrayAccess ? ($__internal_compile_4["#rows"] ?? null) : null));
                foreach ($context['_seq'] as $context["i"] => $context["row"]) {
                    // line 225
                    echo "                ";
                    if (($context["i"] == 0)) {
                        // line 226
                        echo "                     <div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-6\">
                ";
                    } elseif ((                    // line 227
$context["i"] == 1)) {
                        // line 228
                        echo "                       <div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-6 xs-mt-5\">  
                ";
                    } elseif ((                    // line 229
$context["i"] == 2)) {
                        // line 230
                        echo "                       <div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-6 lg-mt-5\">  
                ";
                    } else {
                        // line 232
                        echo "                     <div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-6 mt-5\">
                ";
                    }
                    // line 234
                    echo "                  ";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["row"], 234, $this->source), "html", null, true);
                    echo "
                 </div>
            ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['i'], $context['row'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 237
                echo "                </div>
        ";
                // line 238
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["pager"] ?? null), 238, $this->source), "html", null, true);
                echo "
    ";
            } elseif ((            // line 239
($context["display_id"] ?? null) == "product_gird_2")) {
                // line 240
                echo "        <div class=\"row\">
             ";
                // line 241
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable((($__internal_compile_5 = twig_get_attribute($this->env, $this->source, ($context["rows"] ?? null), 0, [], "any", false, false, true, 241)) && is_array($__internal_compile_5) || $__internal_compile_5 instanceof ArrayAccess ? ($__internal_compile_5["#rows"] ?? null) : null));
                foreach ($context['_seq'] as $context["i"] => $context["row"]) {
                    // line 242
                    echo "                ";
                    if (($context["i"] == 0)) {
                        // line 243
                        echo "                    <div class=\"col-lg-6 col-md-6 col-sm-6\">
                ";
                    } elseif ((                    // line 244
$context["i"] == 1)) {
                        // line 245
                        echo "                    <div class=\"col-lg-6 col-md-6 col-sm-6 xs-mt-5\">
                ";
                    } else {
                        // line 247
                        echo "                    <div class=\"col-lg-6 col-md-6 col-sm-6 mt-5\">
                ";
                    }
                    // line 249
                    echo "                  ";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["row"], 249, $this->source), "html", null, true);
                    echo "
                 </div>
              ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['i'], $context['row'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 252
                echo "        </div>
        <div class=\"row mt-5 text-center\">
            <div class=\"col-md-12 justify-content-center\">
                ";
                // line 255
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["pager"] ?? null), 255, $this->source), "html", null, true);
                echo "
            </div>
        </div>
    ";
            } elseif ((            // line 258
($context["display_id"] ?? null) == "product_gird_3")) {
                // line 259
                echo "        <div class=\"row\">
            ";
                // line 260
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable((($__internal_compile_6 = twig_get_attribute($this->env, $this->source, ($context["rows"] ?? null), 0, [], "any", false, false, true, 260)) && is_array($__internal_compile_6) || $__internal_compile_6 instanceof ArrayAccess ? ($__internal_compile_6["#rows"] ?? null) : null));
                foreach ($context['_seq'] as $context["i"] => $context["row"]) {
                    // line 261
                    echo "                ";
                    if (($context["i"] == 0)) {
                        // line 262
                        echo "                     <div class=\"col-lg-4 col-md-6 col-sm-6\">
                ";
                    } elseif ((                    // line 263
$context["i"] == 1)) {
                        // line 264
                        echo "                       <div class=\"col-lg-4 col-md-6 col-sm-6 xs-mt-5\">  
                ";
                    } elseif ((                    // line 265
$context["i"] == 2)) {
                        // line 266
                        echo "                       <div class=\"col-lg-4 col-md-6 col-sm-6 md-mt-5\">  
                ";
                    } else {
                        // line 268
                        echo "                     <div class=\"col-lg-4 col-md-6 col-sm-6 mt-5\">
                ";
                    }
                    // line 270
                    echo "                  ";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($context["row"], 270, $this->source), "html", null, true);
                    echo "
                 </div>
            ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['i'], $context['row'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 273
                echo "        </div>
        <div class=\"row mt-5 text-center\">
            <div class=\"col-md-12 justify-content-center\">
                ";
                // line 276
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["pager"] ?? null), 276, $this->source), "html", null, true);
                echo "
            </div>
        </div>
    ";
            } elseif ((            // line 279
($context["display_id"] ?? null) == "product_gird_sidebar")) {
                // line 280
                echo "        <div class=\"row mb-5 align-items-center fix-mt-5\">
              <div class=\"col-md-5\">
                <h5 class=\"text-capitalize mb-0\">";
                // line 282
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header"] ?? null), 282, $this->source), "html", null, true);
                echo "</h5>
              </div>
              <div class=\"col-md-7 sm-mt-3 d-sm-flex justify-content-md-end align-items-center\">
                <div class=\"sort-filter mr-4 d-flex align-items-center\">
                ";
                // line 286
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["exposed"] ?? null), 286, $this->source), "html", null, true);
                echo "

                  </div>
                </div>
                
        </div>
                ";
                // line 292
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 292, $this->source), "html", null, true);
                echo "
            ";
                // line 293
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["pager"] ?? null), 293, $this->source), "html", null, true);
                echo "
     ";
            } elseif ((            // line 294
($context["display_id"] ?? null) == "product_gird_3_home_3")) {
                // line 295
                echo "      <section class=\"pt-0 custom-mt-15 custom-sec\">
          <div class=\"container\">
            <div class=\"row text-center\">
              <div class=\"col-lg-12 col-md-12\">
                
             
                  ";
                // line 301
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header"] ?? null), 301, $this->source), "html", null, true);
                echo "

              </div>
            </div>
            <div class=\"row\">
              <div class=\"col-lg-12 col-md-12\">
                <div class=\"grid row columns-3\">
                      ";
                // line 308
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 308, $this->source), "html", null, true);
                echo "
                </div>
              </div>
            </div>
          </div>
        </section>

     ";
            } elseif ((            // line 315
($context["display_id"] ?? null) == "product_gird_3_sort_date")) {
                // line 316
                echo "        <section>
          <div class=\"container\">
            <div class=\"row text-center\">
              <div class=\"col-lg-10 col-md-12 ml-auto mr-auto\">
                <div class=\"section-title\">
                  ";
                // line 321
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer"] ?? null), 321, $this->source), "html", null, true);
                echo "
                </div>
                  ";
                // line 323
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header"] ?? null), 323, $this->source), "html", null, true);
                echo "
              </div>
            </div>
            <div class=\"row\">
              <div class=\"col-lg-12 col-md-12\">
                <div class=\"grid row columns-3\">
                      ";
                // line 329
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 329, $this->source), "html", null, true);
                echo "
                </div>
              </div>
            </div>
          </div>
        </section>
    ";
            } else {
                // line 336
                echo "        ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 336, $this->source), "html", null, true);
                echo "
    ";
            }
        } elseif ((        // line 338
($context["id"] ?? null) == "relate_product_api")) {
            // line 339
            echo "  ";
            if ((($context["display_id"] ?? null) == "relate_product_api_")) {
                // line 340
                echo " <div class=\"owl-carousel owl-theme no-pb slide-arrow-2\" data-dots=\"false\" data-nav=\"true\" data-items=\"4\" data-lg-items=\"3\" data-md-items=\"2\" data-sm-items=\"2\" data-margin=\"30\" data-autoplay=\"true\">
            ";
                // line 341
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 341, $this->source), "html", null, true);
                echo "
        </div>
  ";
            } elseif ((            // line 343
($context["display_id"] ?? null) == "featured_products_home1_2")) {
                // line 344
                echo "    <section class=\"grey-bg\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-lg-8 col-md-10 mr-auto\">
            <div class=\"section-title\">
              ";
                // line 349
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header"] ?? null), 349, $this->source), "html", null, true);
                echo "
            </div>
          </div>
        </div>
        <div class=\"row\">
          <div class=\"col-md-12 addbtn addbtn-theme\">
              <div class=\"owl-carousel owl-theme no-pb slide-arrow-2\" data-dots=\"false\" data-nav=\"true\" data-items=\"4\" data-lg-items=\"3\" data-md-items=\"2\" data-sm-items=\"2\" data-margin=\"30\" data-autoplay=\"true\">
                ";
                // line 356
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 356, $this->source), "html", null, true);
                echo "
              </div>
          </div>
        </div>
      </div>
    </section>
  ";
            } elseif ((            // line 362
($context["display_id"] ?? null) == "slide_2_col_product")) {
                // line 363
                echo "    <section>
      <div class=\"container\">
        <div class=\"row align-items-center\">
          <div class=\"col-xl-6 col-lg-5\">
              ";
                // line 367
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header"] ?? null), 367, $this->source), "html", null, true);
                echo "
          </div>
          <div class=\"col-xl-6 col-lg-7 md-mt-5\">
            <div class=\"owl-carousel owl-theme\" data-items=\"2\" data-md-items=\"2\" data-sm-items=\"2\" data-margin=\"30\" data-autoplay=\"true\">
                ";
                // line 371
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 371, $this->source), "html", null, true);
                echo "
            </div>
          </div>
        </div>
      </div>
    </section>
  ";
            } elseif ((            // line 377
($context["display_id"] ?? null) == "featured_products_3_col_home_4")) {
                // line 378
                echo "    <section class=\"grey-bg\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-lg-8 col-md-10 mr-auto\">
            <div class=\"section-title\">
              ";
                // line 383
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header"] ?? null), 383, $this->source), "html", null, true);
                echo "
            </div>
          </div>
        </div>
        <div class=\"row\">
          <div class=\"col-md-12 addbtn addbtn-theme\">
               <div class=\"owl-carousel owl-theme no-pb slide-arrow-2\" data-dots=\"false\" data-nav=\"true\" data-items=\"3\" data-lg-items=\"2\" data-md-items=\"2\" data-sm-items=\"2\" data-margin=\"30\" data-autoplay=\"true\">
                ";
                // line 390
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 390, $this->source), "html", null, true);
                echo "
              </div>
          </div>
        </div>
      </div>
    </section>
  ";
            } elseif ((            // line 396
($context["display_id"] ?? null) == "best_beller_products_home1")) {
                // line 397
                echo "    <section class=\"grey-bg\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-lg-8 col-md-10 mr-auto\">
            <div class=\"section-title\">
              ";
                // line 402
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header"] ?? null), 402, $this->source), "html", null, true);
                echo "
            </div>
          </div>
        </div>
        <div class=\"row\">
          <div class=\"col-md-12 addbtn addbtn-theme\">
               <div class=\"owl-carousel owl-theme no-pb slide-arrow-2\" data-dots=\"false\" data-nav=\"true\" data-items=\"3\" data-md-items=\"2\" data-sm-items=\"2\" data-margin=\"30\" data-autoplay=\"true\">
                ";
                // line 409
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 409, $this->source), "html", null, true);
                echo "
              </div>
          </div>
        </div>
      </div>
    </section>
  ";
            } elseif ((            // line 415
($context["display_id"] ?? null) == "featured_products_home1_4")) {
                // line 416
                echo "      <section class=\"custom-mt-10 pt-0 addbtn addbtn-theme\">
        <div class=\"container\">
          <div class=\"row\">
            <div class=\"col-md-12\">
              <div class=\"owl-carousel owl-theme\" data-items=\"4\" data-lg-items=\"3\" data-md-items=\"2\" data-sm-items=\"2\" data-margin=\"30\" data-autoplay=\"true\">
                ";
                // line 421
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 421, $this->source), "html", null, true);
                echo "
              </div>
            </div>
          </div>
        </div>
      </section>
  ";
            } else {
                // line 428
                echo "    ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 428, $this->source), "html", null, true);
                echo "
  ";
            }
        } elseif ((        // line 430
($context["id"] ?? null) == "test")) {
            // line 431
            echo "    ";
            if ((($context["display_id"] ?? null) == "shop_categories_sidebar_")) {
                // line 432
                echo "        ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header"] ?? null), 432, $this->source), "html", null, true);
                echo "
         <ul class=\"widget-categories list-unstyled\">
            ";
                // line 434
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 434, $this->source), "html", null, true);
                echo "
         </ul>
    ";
            } elseif ((            // line 436
($context["display_id"] ?? null) == "shop_categories_parent")) {
                // line 437
                echo "          <div class=\"portfolio-filter\">
                  ";
                // line 438
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header"] ?? null), 438, $this->source), "html", null, true);
                echo "
                   ";
                // line 439
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 439, $this->source), "html", null, true);
                echo "
          </div>
        
       
    ";
            } else {
                // line 444
                echo "        ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 444, $this->source), "html", null, true);
                echo "
    ";
            }
            // line 446
            echo "
";
        } else {
            // line 448
            echo "    ";
            // line 449
            $context["classes"] = [0 => ((            // line 450
($context["dom_id"] ?? null)) ? (("js-view-dom-id-" . $this->sandbox->ensureToStringAllowed(($context["dom_id"] ?? null), 450, $this->source))) : (""))];
            // line 453
            echo "        ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["exposed"] ?? null), 453, $this->source), "html", null, true);
            echo "
    <div";
            // line 454
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 454), 454, $this->source), "html", null, true);
            echo ">
        ";
            // line 456
            echo "        ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null), 456, $this->source), "html", null, true);
            echo "
        ";
            // line 458
            echo "        ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header"] ?? null), 458, $this->source), "html", null, true);
            echo "
        ";
            // line 459
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attachment_before"] ?? null), 459, $this->source), "html", null, true);
            echo "
        ";
            // line 460
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rows"] ?? null), 460, $this->source), "html", null, true);
            echo "
        ";
            // line 461
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["footer"] ?? null), 461, $this->source), "html", null, true);
            echo "
        ";
            // line 462
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["pager"] ?? null), 462, $this->source), "html", null, true);
            echo "
        ";
            // line 463
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attachment_after"] ?? null), 463, $this->source), "html", null, true);
            echo "
        ";
            // line 464
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["more"] ?? null), 464, $this->source), "html", null, true);
            echo "
        ";
            // line 465
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["feed_icons"] ?? null), 465, $this->source), "html", null, true);
            echo "
    </div>
";
        }
    }

    public function getTemplateName()
    {
        return "themes/oshop/templates/views-view.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  997 => 465,  993 => 464,  989 => 463,  985 => 462,  981 => 461,  977 => 460,  973 => 459,  968 => 458,  963 => 456,  959 => 454,  954 => 453,  952 => 450,  951 => 449,  949 => 448,  945 => 446,  939 => 444,  931 => 439,  927 => 438,  924 => 437,  922 => 436,  917 => 434,  911 => 432,  908 => 431,  906 => 430,  900 => 428,  890 => 421,  883 => 416,  881 => 415,  872 => 409,  862 => 402,  855 => 397,  853 => 396,  844 => 390,  834 => 383,  827 => 378,  825 => 377,  816 => 371,  809 => 367,  803 => 363,  801 => 362,  792 => 356,  782 => 349,  775 => 344,  773 => 343,  768 => 341,  765 => 340,  762 => 339,  760 => 338,  754 => 336,  744 => 329,  735 => 323,  730 => 321,  723 => 316,  721 => 315,  711 => 308,  701 => 301,  693 => 295,  691 => 294,  687 => 293,  683 => 292,  674 => 286,  667 => 282,  663 => 280,  661 => 279,  655 => 276,  650 => 273,  640 => 270,  636 => 268,  632 => 266,  630 => 265,  627 => 264,  625 => 263,  622 => 262,  619 => 261,  615 => 260,  612 => 259,  610 => 258,  604 => 255,  599 => 252,  589 => 249,  585 => 247,  581 => 245,  579 => 244,  576 => 243,  573 => 242,  569 => 241,  566 => 240,  564 => 239,  560 => 238,  557 => 237,  547 => 234,  543 => 232,  539 => 230,  537 => 229,  534 => 228,  532 => 227,  529 => 226,  526 => 225,  522 => 224,  514 => 219,  507 => 215,  500 => 212,  498 => 211,  495 => 210,  489 => 206,  479 => 203,  473 => 201,  467 => 199,  464 => 198,  460 => 197,  455 => 194,  453 => 193,  443 => 186,  439 => 184,  429 => 181,  423 => 179,  417 => 177,  414 => 176,  410 => 175,  402 => 169,  398 => 167,  392 => 165,  389 => 164,  387 => 163,  385 => 162,  380 => 160,  376 => 159,  367 => 153,  360 => 149,  356 => 147,  351 => 145,  345 => 142,  341 => 141,  338 => 140,  336 => 139,  331 => 137,  327 => 136,  324 => 135,  322 => 134,  313 => 128,  304 => 122,  299 => 120,  292 => 115,  290 => 114,  281 => 108,  275 => 105,  271 => 104,  265 => 100,  263 => 99,  260 => 98,  258 => 97,  252 => 95,  244 => 90,  239 => 87,  236 => 86,  234 => 85,  228 => 82,  224 => 81,  220 => 80,  216 => 79,  212 => 78,  208 => 77,  204 => 76,  200 => 75,  195 => 73,  191 => 72,  187 => 71,  183 => 70,  178 => 69,  169 => 63,  164 => 60,  154 => 57,  150 => 55,  146 => 53,  144 => 52,  141 => 51,  139 => 50,  136 => 49,  133 => 48,  129 => 47,  124 => 44,  122 => 43,  116 => 39,  106 => 36,  102 => 34,  98 => 32,  96 => 31,  93 => 30,  91 => 29,  88 => 28,  85 => 27,  81 => 26,  73 => 21,  66 => 16,  64 => 15,  58 => 12,  49 => 6,  41 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% if id == 'blog' %}
    {% if display_id == \"blog_masonry_\"  %} 
        <div class=\"row\">
            <div class=\"col-md-12\">
                <div class=\"masonry columns-3 row\">
                     {{ rows }}
                </div>
            </div>
        </div>
        <div class=\"row mt-2\">
          <div class=\"col-sm-12\">
            {{ pager }}
          </div>
        </div>
    {% elseif display_id == \"blog_home1\"  %}
        <section class=\"grey-bg\">
            <div class=\"container\">
                <div class=\"row text-center\">
                  <div class=\"col-lg-8 col-md-12 ml-auto mr-auto\">
                    <div class=\"section-title\">
                      {{ header }}
                    </div>
                  </div>
                </div>
                <div class=\"row\">
            {% for i,row in rows.0['#rows'] %}
                {% if i == 0 %}
                     <div class=\"col-lg-4 col-md-6 col-sm-6\">
                {% elseif i == 1 %}
                       <div class=\"col-lg-4 col-md-6 col-sm-6 xs-mt-5\">  
                {% elseif i == 2 %}
                       <div class=\"col-lg-4 col-md-6 col-sm-6 md-mt-5\">  
                {% else %}
                     <div class=\"col-lg-4 col-md-6 col-sm-6 mt-5\">
                {% endif %}
                  {{ row }}
                 </div>
            {% endfor %}
                </div>
          
            </div>
        </section>
    {% elseif display_id == \"page_blog\"  %}
        <section>
            <div class=\"container\">
                <div class=\"row\">
            {% for i,row in rows.0['#rows'] %}
                {% if i == 0 %}
                     <div class=\"col-lg-4 col-md-6 col-sm-6\">
                {% elseif i == 1 %}
                       <div class=\"col-lg-4 col-md-6 col-sm-6 xs-mt-5\">  
                {% elseif i == 2 %}
                       <div class=\"col-lg-4 col-md-6 col-sm-6 md-mt-5\">  
                {% else %}
                     <div class=\"col-lg-4 col-md-6 col-sm-6 mt-5\">
                {% endif %}
                  {{ row }}
                 </div>
            {% endfor %}
                </div>
                <div class=\"row mt-5 text-center\">
                    <div class=\"col-md-12 justify-content-center\">     
                        {{ pager }}
                    </div>
                </div>
            </div>
        </section>
    {% else %}
        {{ exposed }}
        <div{{ attributes }}>
            {{ title_prefix }}
            {{ title }}
            {{ title_suffix }}
            
            {{ header }}
            {{ attachment_before }}
                {{ rows }}
            {{ footer }}
            {{ pager }}
            {{ attachment_after }}
            {{ more }}
            {{ feed_icons }}
        </div>
    {% endif %}
{% elseif id == \"logo_client_block\" %}
   {% if display_id == \"logo_client_block_\"  %}
      <div class=\"row client-logo mt-10\">
        <div class=\"col-md-12\">
            <div class=\"owl-carousel owl-theme no-pb\" data-dots=\"false\" data-items=\"5\" data-md-items=\"4\" data-sm-items=\"3\" data-margin=\"30\" data-autoplay=\"true\">
                {{ rows }}
            </div>
        </div>
      </div>
   {% else %}
      {{ rows }}
   {% endif %}
{% elseif id == \"product_filter_sidebar_price\" %}
  
  {% if display_id == \"top_product_home_1\"  %}
      <section class=\"product-left-side\">
          <div class=\"container\">
            <div class=\"row\">
              <div class=\"col-lg-4 col-md-12 update-mb4\">
                  {{ header}}
                  {{ rows }}
              </div>
             
                    {{ footer }}
     
            
            </div>
          </div>
        </section>
  {% elseif display_id == \"product_gird_3_hot_and_sale\"  %}
        <section>
          <div class=\"container\">
            <div class=\"row text-center\">
              <div class=\"col-lg-8 col-md-12 ml-auto mr-auto\">
                <div class=\"section-title\">
                  {{ footer }}
                </div>
                  {{ header }}
              </div>
            </div>
            <div class=\"row\">
              <div class=\"col-lg-12 col-md-12\">
                <div class=\"grid row columns-3\">
                      {{ rows }}
                </div>
              </div>
            </div>
          </div>
        </section>
  {% elseif display_id == \"top_on_sale\"  %}
      <div class=\"col-lg-4 col-md-12 md-mt-3 sm-mt-5 update-mb4\">
           {{ header }}
            {{ rows }}
      </div>
  {% elseif display_id == \"most_popular_home1\"  %}
    <div class=\"col-lg-4 col-md-12 md-mt-3 sm-mt-5 update-mb4\">
      {{ header }}
      {{ rows }}
   
    </div>
       {{ footer }}
  {% else %}
        <div class=\"row mb-5 align-items-center fix-mt-5\">
              <div class=\"col-md-5\">
                <h5 class=\"text-capitalize mb-0\">{{ header }}</h5>
              </div>
              <div class=\"col-md-7 sm-mt-3 d-sm-flex justify-content-md-end align-items-center\">
                <div class=\"sort-filter mr-4 d-flex align-items-center\">
                {{ exposed }}

                  </div>
                </div>
                
        </div>
                {{ rows }}
            {{ pager }}
  {% endif %}
{% elseif id == \"testimonial\"  %}
{% if display_id == \"testimonials_home_1\" %}
    {% if header_style == \"header6\" %}
    <section class=\"text-center testimonial dark-bg jarallax\" data-bg-img=\"{{ header }}\" data-overlay=\"9\">
    {% else %}
    <section class=\"grey-bg text-center testimonial\">
    {% endif %}
        <div class=\"container\">
          <div class=\"row text-center\">
            <div class=\"col-xl-8 col-lg-10 col-md-12 ml-auto mr-auto\">
              <div class=\"tab\">
                <!-- Tab panes -->
                <div class=\"tab-content\" id=\"nav-tabContent\">
                  {% for i,row in rows.0['#rows'] %}
                      {% if i == 0 %}
                           <div role=\"tabpanel\" class=\"tab-pane fade show active\" id=\"tab1-{{i}}\">
                      {% else %}
                           <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"tab1-{{i}}\">
                      {% endif %}
                        {{ row }}
                       </div>
                  {% endfor %}
                </div>
                <!-- Nav tabs -->
                  {{ attachment_after }}
              </div>
            </div>
          </div>
        </div>
    </section>

{% elseif display_id == \"attachment_1\" %}
    <nav>
      <div class=\"nav nav-tabs mt-5\" id=\"nav-tab\" role=\"tablist\">

            {% for i,row in rows.0['#rows'] %}
                {% if i == 0 %}
                    <a class=\"nav-item nav-link active\" id=\"nav-tab2\" data-toggle=\"tab\" href=\"#tab1-{{ i }}\" role=\"tab\" aria-selected=\"false\">
                {% else %}
                   <a class=\"nav-item nav-link\" id=\"nav-tab2\" data-toggle=\"tab\" href=\"#tab1-{{ i }}\" role=\"tab\" aria-selected=\"false\">
                {% endif %}
                  {{ row }}
                 </a>
            {% endfor %}
      </div>
    </nav>
{% else %}
{% endif %}

{% elseif id == \"product_content_block\"  %}
    {% if display_id == \"product_left_sidebar_api\" or display_id == \"product_categories_api\" %} 
            <div class=\"row mb-5 align-items-center\">
              <div class=\"col-md-5\">
                <h5 class=\"text-capitalize mb-0\">{{ header }}</h5>
              </div>
              <div class=\"col-md-7 sm-mt-3 d-sm-flex justify-content-md-end align-items-center\">
                <div class=\"sort-filter mr-4 d-flex align-items-center\">
                  {{ exposed }}
                </div>
              </div>
            </div>
                <div class=\"row\">      
            {% for i,row in rows.0['#rows'] %}
                {% if i == 0 %}
                     <div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-6\">
                {% elseif i == 1 %}
                       <div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-6 xs-mt-5\">  
                {% elseif i == 2 %}
                       <div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-6 lg-mt-5\">  
                {% else %}
                     <div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-6 mt-5\">
                {% endif %}
                  {{ row }}
                 </div>
            {% endfor %}
                </div>
        {{ pager }}
    {% elseif display_id == \"product_gird_2\" %}
        <div class=\"row\">
             {% for i,row in rows.0['#rows'] %}
                {% if i == 0 %}
                    <div class=\"col-lg-6 col-md-6 col-sm-6\">
                {% elseif i == 1 %}
                    <div class=\"col-lg-6 col-md-6 col-sm-6 xs-mt-5\">
                {% else %}
                    <div class=\"col-lg-6 col-md-6 col-sm-6 mt-5\">
                {% endif %}
                  {{ row }}
                 </div>
              {% endfor %}
        </div>
        <div class=\"row mt-5 text-center\">
            <div class=\"col-md-12 justify-content-center\">
                {{ pager }}
            </div>
        </div>
    {% elseif display_id == \"product_gird_3\" %}
        <div class=\"row\">
            {% for i,row in rows.0['#rows'] %}
                {% if i == 0 %}
                     <div class=\"col-lg-4 col-md-6 col-sm-6\">
                {% elseif i == 1 %}
                       <div class=\"col-lg-4 col-md-6 col-sm-6 xs-mt-5\">  
                {% elseif i == 2 %}
                       <div class=\"col-lg-4 col-md-6 col-sm-6 md-mt-5\">  
                {% else %}
                     <div class=\"col-lg-4 col-md-6 col-sm-6 mt-5\">
                {% endif %}
                  {{ row }}
                 </div>
            {% endfor %}
        </div>
        <div class=\"row mt-5 text-center\">
            <div class=\"col-md-12 justify-content-center\">
                {{ pager }}
            </div>
        </div>
    {% elseif display_id == \"product_gird_sidebar\"  %}
        <div class=\"row mb-5 align-items-center fix-mt-5\">
              <div class=\"col-md-5\">
                <h5 class=\"text-capitalize mb-0\">{{ header }}</h5>
              </div>
              <div class=\"col-md-7 sm-mt-3 d-sm-flex justify-content-md-end align-items-center\">
                <div class=\"sort-filter mr-4 d-flex align-items-center\">
                {{ exposed }}

                  </div>
                </div>
                
        </div>
                {{ rows }}
            {{ pager }}
     {% elseif display_id == \"product_gird_3_home_3\"  %}
      <section class=\"pt-0 custom-mt-15 custom-sec\">
          <div class=\"container\">
            <div class=\"row text-center\">
              <div class=\"col-lg-12 col-md-12\">
                
             
                  {{ header }}

              </div>
            </div>
            <div class=\"row\">
              <div class=\"col-lg-12 col-md-12\">
                <div class=\"grid row columns-3\">
                      {{ rows }}
                </div>
              </div>
            </div>
          </div>
        </section>

     {% elseif display_id == \"product_gird_3_sort_date\"  %}
        <section>
          <div class=\"container\">
            <div class=\"row text-center\">
              <div class=\"col-lg-10 col-md-12 ml-auto mr-auto\">
                <div class=\"section-title\">
                  {{ footer }}
                </div>
                  {{ header }}
              </div>
            </div>
            <div class=\"row\">
              <div class=\"col-lg-12 col-md-12\">
                <div class=\"grid row columns-3\">
                      {{ rows }}
                </div>
              </div>
            </div>
          </div>
        </section>
    {% else %}
        {{ rows }}
    {% endif %}
{% elseif id == \"relate_product_api\" %}
  {% if display_id == \"relate_product_api_\"  %}
 <div class=\"owl-carousel owl-theme no-pb slide-arrow-2\" data-dots=\"false\" data-nav=\"true\" data-items=\"4\" data-lg-items=\"3\" data-md-items=\"2\" data-sm-items=\"2\" data-margin=\"30\" data-autoplay=\"true\">
            {{ rows }}
        </div>
  {% elseif display_id == \"featured_products_home1_2\"  %}
    <section class=\"grey-bg\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-lg-8 col-md-10 mr-auto\">
            <div class=\"section-title\">
              {{ header }}
            </div>
          </div>
        </div>
        <div class=\"row\">
          <div class=\"col-md-12 addbtn addbtn-theme\">
              <div class=\"owl-carousel owl-theme no-pb slide-arrow-2\" data-dots=\"false\" data-nav=\"true\" data-items=\"4\" data-lg-items=\"3\" data-md-items=\"2\" data-sm-items=\"2\" data-margin=\"30\" data-autoplay=\"true\">
                {{ rows }}
              </div>
          </div>
        </div>
      </div>
    </section>
  {% elseif display_id == \"slide_2_col_product\"  %}
    <section>
      <div class=\"container\">
        <div class=\"row align-items-center\">
          <div class=\"col-xl-6 col-lg-5\">
              {{ header }}
          </div>
          <div class=\"col-xl-6 col-lg-7 md-mt-5\">
            <div class=\"owl-carousel owl-theme\" data-items=\"2\" data-md-items=\"2\" data-sm-items=\"2\" data-margin=\"30\" data-autoplay=\"true\">
                {{ rows }}
            </div>
          </div>
        </div>
      </div>
    </section>
  {% elseif display_id == \"featured_products_3_col_home_4\"  %}
    <section class=\"grey-bg\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-lg-8 col-md-10 mr-auto\">
            <div class=\"section-title\">
              {{ header }}
            </div>
          </div>
        </div>
        <div class=\"row\">
          <div class=\"col-md-12 addbtn addbtn-theme\">
               <div class=\"owl-carousel owl-theme no-pb slide-arrow-2\" data-dots=\"false\" data-nav=\"true\" data-items=\"3\" data-lg-items=\"2\" data-md-items=\"2\" data-sm-items=\"2\" data-margin=\"30\" data-autoplay=\"true\">
                {{ rows }}
              </div>
          </div>
        </div>
      </div>
    </section>
  {% elseif display_id == \"best_beller_products_home1\"  %}
    <section class=\"grey-bg\">
      <div class=\"container\">
        <div class=\"row\">
          <div class=\"col-lg-8 col-md-10 mr-auto\">
            <div class=\"section-title\">
              {{ header }}
            </div>
          </div>
        </div>
        <div class=\"row\">
          <div class=\"col-md-12 addbtn addbtn-theme\">
               <div class=\"owl-carousel owl-theme no-pb slide-arrow-2\" data-dots=\"false\" data-nav=\"true\" data-items=\"3\" data-md-items=\"2\" data-sm-items=\"2\" data-margin=\"30\" data-autoplay=\"true\">
                {{ rows }}
              </div>
          </div>
        </div>
      </div>
    </section>
  {% elseif display_id == \"featured_products_home1_4\"  %}
      <section class=\"custom-mt-10 pt-0 addbtn addbtn-theme\">
        <div class=\"container\">
          <div class=\"row\">
            <div class=\"col-md-12\">
              <div class=\"owl-carousel owl-theme\" data-items=\"4\" data-lg-items=\"3\" data-md-items=\"2\" data-sm-items=\"2\" data-margin=\"30\" data-autoplay=\"true\">
                {{ rows }}
              </div>
            </div>
          </div>
        </div>
      </section>
  {% else %}
    {{ rows }}
  {% endif %}
{% elseif id == \"test\" %}
    {% if display_id == \"shop_categories_sidebar_\" %}
        {{ header }}
         <ul class=\"widget-categories list-unstyled\">
            {{ rows }}
         </ul>
    {% elseif display_id == \"shop_categories_parent\" %}
          <div class=\"portfolio-filter\">
                  {{ header }}
                   {{ rows }}
          </div>
        
       
    {% else %}
        {{ rows }}
    {% endif %}

{% else %}
    {%
        set classes = [
            dom_id ? 'js-view-dom-id-' ~ dom_id,
        ]
    %}
        {{ exposed }}
    <div{{ attributes.addClass(classes) }}>
        {# {{ title_prefix }} #}
        {{ title }}
        {#  {{ title_suffix }} #}
        {{ header }}
        {{ attachment_before }}
        {{ rows }}
        {{ footer }}
        {{ pager }}
        {{ attachment_after }}
        {{ more }}
        {{ feed_icons }}
    </div>
{% endif %}", "themes/oshop/templates/views-view.html.twig", "/var/www/html/themes/oshop/templates/views-view.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 1, "for" => 26, "set" => 449);
        static $filters = array("escape" => 6);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if', 'for', 'set'],
                ['escape'],
                []
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
