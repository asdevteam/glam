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

/* themes/oshop/templates/node/commerce-product--full.html.twig */
class __TwigTemplate_855254f72ce65c57525af5b2cff9bada extends \Twig\Template
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
        $context["img_uri"] = twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["product_entity"] ?? null), "field_image", [], "any", false, false, true, 1), "entity", [], "any", false, false, true, 1), "uri", [], "any", false, false, true, 1), "value", [], "any", false, false, true, 1);
        // line 2
        $context["img_url"] = $this->extensions['Drupal\Core\Template\TwigExtension']->getFileUrl($this->sandbox->ensureToStringAllowed(($context["img_uri"] ?? null), 2, $this->source));
        // line 3
        $context["img_arr"] = twig_get_attribute($this->env, $this->source, ($context["product_entity"] ?? null), "field_image", [], "any", false, false, true, 3);
        // line 4
        $context["img_alt"] = twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["product_entity"] ?? null), "field_image", [], "any", false, false, true, 4), "alt", [], "any", false, false, true, 4);
        // line 5
        echo "
";
        // line 6
        $context["comment_count"] = twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["product_entity"] ?? null), "field_product_comment", [], "any", false, false, true, 6), "comment_count", [], "any", false, false, true, 6);
        // line 7
        if ((($context["comment_count"] ?? null) <= 0)) {
            // line 8
            $context["comment_count"] = 0;
        }
        // line 10
        $context["image112x112"] = $this->extensions['Drupal\nvs_func\Twig\NVSImageStyle']->getUrlByImageStyle($this->sandbox->ensureToStringAllowed(($context["img_uri"] ?? null), 10, $this->source), "image112x112");
        // line 11
        $context["image458x611"] = $this->extensions['Drupal\nvs_func\Twig\NVSImageStyle']->getUrlByImageStyle($this->sandbox->ensureToStringAllowed(($context["img_uri"] ?? null), 11, $this->source), "image458x611");
        // line 12
        echo "
";
        // line 13
        if ((($context["shop_detail"] ?? null) == "style1")) {
            // line 14
            echo "<section>
  <div class=\"container\">
    <div class=\"row\">
      <div class=\"col-lg-5 col-md-12\">
        <div class=\"slick3\">
          ";
            // line 19
            if ((twig_length_filter($this->env, ($context["img_arr"] ?? null)) > 1)) {
                // line 20
                echo "            ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["img_arr"] ?? null));
                foreach ($context['_seq'] as $context["i"] => $context["img_item"]) {
                    // line 21
                    echo "              ";
                    $context["imguri"] = twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["img_item"], "entity", [], "any", false, false, true, 21), "uri", [], "any", false, false, true, 21), "value", [], "any", false, false, true, 21);
                    // line 22
                    echo "              ";
                    $context["image112x112"] = $this->extensions['Drupal\nvs_func\Twig\NVSImageStyle']->getUrlByImageStyle($this->sandbox->ensureToStringAllowed(($context["imguri"] ?? null), 22, $this->source), "image112x112");
                    // line 23
                    echo "              ";
                    $context["image458x611"] = $this->extensions['Drupal\nvs_func\Twig\NVSImageStyle']->getUrlByImageStyle($this->sandbox->ensureToStringAllowed(($context["imguri"] ?? null), 23, $this->source), "image458x611");
                    // line 24
                    echo "              <div class=\"item-slick3\" data-thumb=\"";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["image112x112"] ?? null), 24, $this->source), "html", null, true);
                    echo "\">
                <img class=\"img-fluid w-100\" src=\"";
                    // line 25
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["image458x611"] ?? null), 25, $this->source), "html", null, true);
                    echo "\" alt=\"";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["product"] ?? null), "title", [], "any", false, false, true, 25), 25, $this->source), "html", null, true);
                    echo "\">
              </div>
            ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['i'], $context['img_item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 28
                echo "          ";
            }
            // line 29
            echo "        </div>
        <div class=\"slick3-dots-main\"></div>
      </div>
      <div class=\"col-lg-7 col-md-12 md-mt-5\">
        <div class=\"product-details\">
          <h4>
            ";
            // line 35
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["product"] ?? null), "title", [], "any", false, false, true, 35), 35, $this->source), "html", null, true);
            echo "
          </h4>
          <div class=\"product-price my-4\"> <span class=\"mr-3\"> ";
            // line 37
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["product"] ?? null), "variation_price", [], "any", false, false, true, 37), 37, $this->source), "html", null, true);
            echo " <del>";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["product"] ?? null), "field_old", [], "any", false, false, true, 37), 37, $this->source), "html", null, true);
            echo "</del></span>
            <span class=\"review-rating\">
              ";
            // line 39
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["product"] ?? null), "field_voting", [], "any", false, false, true, 39), 39, $this->source), "html", null, true);
            echo "
            </span>
          </div>
          <ul class=\"portfolio-meta list-unstyled mb-4\">
            <li class=\"mb-2\"><span> SKU: </span> ";
            // line 43
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["product"] ?? null), "variation_sku", [], "any", false, false, true, 43), 43, $this->source), "html", null, true);
            echo "</li>
            <li><span> ";
            // line 44
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed((($__internal_compile_0 = twig_get_attribute($this->env, $this->source, ($context["product"] ?? null), "field_categories", [], "any", false, false, true, 44)) && is_array($__internal_compile_0) || $__internal_compile_0 instanceof ArrayAccess ? ($__internal_compile_0["#title"] ?? null) : null), 44, $this->source), "html", null, true);
            echo " :</span> ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["product"] ?? null), "field_categories", [], "any", false, false, true, 44), 44, $this->source), "html", null, true);
            echo "</li>
          </ul>
          <p>";
            // line 46
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["product_entity"] ?? null), "body", [], "any", false, false, true, 46), "summary", [], "any", false, false, true, 46), 46, $this->source), "html", null, true);
            echo "</p>
        
          <div class=\"row my-4 fix-variations addbtn-theme addbtn\">
              ";
            // line 49
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["product"] ?? null), "variations", [], "any", false, false, true, 49), 49, $this->source), "html", null, true);
            echo "
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
";
        } else {
            // line 57
            echo "     <section>
          <div class=\"container\">
            <div class=\"row align-items-center\">
              <div class=\"col-lg-6 col-md-12\">
                <div class=\"row\">
                  <div class=\"col-sm-9 order-sm-12\">
                    <div class=\"slick3\">
                        ";
            // line 64
            if ((twig_length_filter($this->env, ($context["img_arr"] ?? null)) > 1)) {
                // line 65
                echo "                          ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["img_arr"] ?? null));
                foreach ($context['_seq'] as $context["i"] => $context["img_item"]) {
                    // line 66
                    echo "                            ";
                    $context["imguri"] = twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["img_item"], "entity", [], "any", false, false, true, 66), "uri", [], "any", false, false, true, 66), "value", [], "any", false, false, true, 66);
                    // line 67
                    echo "                            ";
                    $context["image112x112"] = $this->extensions['Drupal\nvs_func\Twig\NVSImageStyle']->getUrlByImageStyle($this->sandbox->ensureToStringAllowed(($context["imguri"] ?? null), 67, $this->source), "image112x112");
                    // line 68
                    echo "                            ";
                    $context["image458x611"] = $this->extensions['Drupal\nvs_func\Twig\NVSImageStyle']->getUrlByImageStyle($this->sandbox->ensureToStringAllowed(($context["imguri"] ?? null), 68, $this->source), "image458x611");
                    // line 69
                    echo "                            <div class=\"item-slick3\" data-thumb=\"";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["image112x112"] ?? null), 69, $this->source), "html", null, true);
                    echo "\">
                              <img class=\"img-fluid w-100\" src=\"";
                    // line 70
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["image458x611"] ?? null), 70, $this->source), "html", null, true);
                    echo "\" alt=\"";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["product"] ?? null), "title", [], "any", false, false, true, 70), 70, $this->source), "html", null, true);
                    echo "\">
                            </div>
                          ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['i'], $context['img_item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 73
                echo "                        ";
            }
            // line 74
            echo "                    </div>
                  </div>
                  <div class=\"col-sm-3 order-sm-1\">
                    <div class=\"slick3-dots-main product-details2\"></div>
                  </div>
                </div>
              </div>
              <div class=\"col-lg-6 col-md-12 md-mt-5\">
                <div class=\"product-details\">
                  <h4>
                     ";
            // line 84
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["product"] ?? null), "title", [], "any", false, false, true, 84), 84, $this->source), "html", null, true);
            echo "
                  </h4>
                    <div class=\"product-price my-4\"> <span class=\"mr-3\"> ";
            // line 86
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["product"] ?? null), "variation_price", [], "any", false, false, true, 86), 86, $this->source), "html", null, true);
            echo " <del>";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["product"] ?? null), "field_old", [], "any", false, false, true, 86), 86, $this->source), "html", null, true);
            echo "</del></span>
                    </div>
                    <p>";
            // line 88
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["product_entity"] ?? null), "body", [], "any", false, false, true, 88), "summary", [], "any", false, false, true, 88), 88, $this->source), "html", null, true);
            echo "</p>
                  <div class=\"row my-4 fix-variations\">";
            // line 89
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["product"] ?? null), "variations", [], "any", false, false, true, 89), 89, $this->source), "html", null, true);
            echo "
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </section>
";
        }
        // line 98
        echo "
<!--tab start-->
<section class=\"grey-bg\">
  <div class=\"container\">
    <div class=\"row\">
      <div class=\"col-md-12\">
        <div class=\"tab ";
        // line 104
        if ((($context["shop_detail"] ?? null) != "style1")) {
            echo " text-center ";
        }
        echo "\">
          <!-- Nav tabs -->
          <nav>
            <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\"> <a class=\"nav-item nav-link active\" id=\"nav-tab1\" data-toggle=\"tab\" href=\"#tab3-1\" role=\"tab\" aria-selected=\"true\">";
        // line 107
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Description"));
        echo "</a>
              <a class=\"nav-item nav-link\" id=\"nav-tab2\" data-toggle=\"tab\" href=\"#tab3-2\" role=\"tab\" aria-selected=\"false\">";
        // line 108
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed((($__internal_compile_1 = twig_get_attribute($this->env, $this->source, ($context["product"] ?? null), "field_additional_information", [], "any", false, false, true, 108)) && is_array($__internal_compile_1) || $__internal_compile_1 instanceof ArrayAccess ? ($__internal_compile_1["#title"] ?? null) : null), 108, $this->source), "html", null, true);
        echo "</a>
              <a class=\"nav-item nav-link\" id=\"nav-tab3\" data-toggle=\"tab\" href=\"#tab3-3\" role=\"tab\" aria-selected=\"false\"> ";
        // line 109
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Reviews"));
        echo " (";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["comment_count"] ?? null), 109, $this->source), "html", null, true);
        echo ")</a>
            </div>
          </nav>
          <!-- Tab panes -->
          <div class=\"tab-content ";
        // line 113
        if ((($context["shop_detail"] ?? null) != "style1")) {
            echo " text-left ";
        }
        echo "\">
            <div role=\"tabpanel\" class=\"tab-pane fade show active\" id=\"tab3-1\">
             ";
        // line 115
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["product"] ?? null), "body", [], "any", false, false, true, 115), 115, $this->source), "html", null, true);
        echo "
            </div>
            <div role=\"tabpanel\" class=\"tab-pane fade ";
        // line 117
        if ((($context["shop_detail"] ?? null) != "style1")) {
            echo " text-left ";
        }
        echo "\" id=\"tab3-2\">
              ";
        // line 118
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["product"] ?? null), "field_additional_information", [], "any", false, false, true, 118), 118, $this->source), "html", null, true);
        echo "
            </div>
            <div role=\"tabpanel\" class=\"tab-pane fade update-cmt ";
        // line 120
        if ((($context["shop_detail"] ?? null) != "style1")) {
            echo " text-left ";
        }
        echo "\" id=\"tab3-3\">
              ";
        // line 121
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["product"] ?? null), "field_product_comment", [], "any", false, false, true, 121), 121, $this->source), "html", null, true);
        echo "
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!--tab end-->
<!--product start-->
<section>
  <div class=\"container\">
    <div class=\"row\">
      <div class=\"col-lg-8 col-md-10 mr-auto\">
        <div class=\"section-title\">
          <h2 class=\"title\">";
        // line 136
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Related"));
        echo " <span>";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Products"));
        echo "</span></h2>
          
        </div>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-md-12\">
        
           ";
        // line 145
        echo "          ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, views_embed_view("relate_product_api", "relate_product_api_", $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (($__internal_compile_2 = twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["product"] ?? null), "field_categories", [], "any", false, false, true, 145), 0, [], "any", false, false, true, 145)) && is_array($__internal_compile_2) || $__internal_compile_2 instanceof ArrayAccess ? ($__internal_compile_2["#options"] ?? null) : null), "entity", [], "any", false, false, true, 145), "tid", [], "any", false, false, true, 145), "value", [], "any", false, false, true, 145), 145, $this->source)), "html", null, true);
        echo "
      
      </div>
    </div>
  </div>
</section>";
    }

    public function getTemplateName()
    {
        return "themes/oshop/templates/node/commerce-product--full.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  340 => 145,  327 => 136,  309 => 121,  303 => 120,  298 => 118,  292 => 117,  287 => 115,  280 => 113,  271 => 109,  267 => 108,  263 => 107,  255 => 104,  247 => 98,  235 => 89,  231 => 88,  224 => 86,  219 => 84,  207 => 74,  204 => 73,  193 => 70,  188 => 69,  185 => 68,  182 => 67,  179 => 66,  174 => 65,  172 => 64,  163 => 57,  152 => 49,  146 => 46,  139 => 44,  135 => 43,  128 => 39,  121 => 37,  116 => 35,  108 => 29,  105 => 28,  94 => 25,  89 => 24,  86 => 23,  83 => 22,  80 => 21,  75 => 20,  73 => 19,  66 => 14,  64 => 13,  61 => 12,  59 => 11,  57 => 10,  54 => 8,  52 => 7,  50 => 6,  47 => 5,  45 => 4,  43 => 3,  41 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% set img_uri = product_entity.field_image.entity.uri.value %}
{% set img_url = file_url(img_uri) %}
{% set img_arr = product_entity.field_image %}
{% set img_alt = product_entity.field_image.alt %}

{% set comment_count =  product_entity.field_product_comment.comment_count %}
{% if comment_count <= 0  %}
{% set comment_count = 0 %}
{% endif %}
{% set image112x112 = getUrlByImageStyle(img_uri, 'image112x112')  %}
{% set image458x611 = getUrlByImageStyle(img_uri, 'image458x611')  %}

{% if shop_detail == 'style1' %}
<section>
  <div class=\"container\">
    <div class=\"row\">
      <div class=\"col-lg-5 col-md-12\">
        <div class=\"slick3\">
          {% if img_arr|length > 1 %}
            {% for i, img_item in img_arr %}
              {% set imguri = img_item.entity.uri.value %}
              {% set image112x112 = getUrlByImageStyle(imguri, 'image112x112') %}
              {% set image458x611 = getUrlByImageStyle(imguri, 'image458x611')  %}
              <div class=\"item-slick3\" data-thumb=\"{{ image112x112 }}\">
                <img class=\"img-fluid w-100\" src=\"{{ image458x611 }}\" alt=\"{{ product.title }}\">
              </div>
            {% endfor %}
          {% endif %}
        </div>
        <div class=\"slick3-dots-main\"></div>
      </div>
      <div class=\"col-lg-7 col-md-12 md-mt-5\">
        <div class=\"product-details\">
          <h4>
            {{ product.title }}
          </h4>
          <div class=\"product-price my-4\"> <span class=\"mr-3\"> {{ product.variation_price }} <del>{{ product.field_old }}</del></span>
            <span class=\"review-rating\">
              {{ product.field_voting }}
            </span>
          </div>
          <ul class=\"portfolio-meta list-unstyled mb-4\">
            <li class=\"mb-2\"><span> SKU: </span> {{ product.variation_sku }}</li>
            <li><span> {{ product.field_categories['#title'] }} :</span> {{ product.field_categories }}</li>
          </ul>
          <p>{{ product_entity.body.summary }}</p>
        
          <div class=\"row my-4 fix-variations addbtn-theme addbtn\">
              {{ product.variations }}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{% else %}
     <section>
          <div class=\"container\">
            <div class=\"row align-items-center\">
              <div class=\"col-lg-6 col-md-12\">
                <div class=\"row\">
                  <div class=\"col-sm-9 order-sm-12\">
                    <div class=\"slick3\">
                        {% if img_arr|length > 1 %}
                          {% for i, img_item in img_arr %}
                            {% set imguri = img_item.entity.uri.value %}
                            {% set image112x112 = getUrlByImageStyle(imguri, 'image112x112') %}
                            {% set image458x611 = getUrlByImageStyle(imguri, 'image458x611')  %}
                            <div class=\"item-slick3\" data-thumb=\"{{ image112x112 }}\">
                              <img class=\"img-fluid w-100\" src=\"{{ image458x611 }}\" alt=\"{{ product.title }}\">
                            </div>
                          {% endfor %}
                        {% endif %}
                    </div>
                  </div>
                  <div class=\"col-sm-3 order-sm-1\">
                    <div class=\"slick3-dots-main product-details2\"></div>
                  </div>
                </div>
              </div>
              <div class=\"col-lg-6 col-md-12 md-mt-5\">
                <div class=\"product-details\">
                  <h4>
                     {{ product.title }}
                  </h4>
                    <div class=\"product-price my-4\"> <span class=\"mr-3\"> {{ product.variation_price }} <del>{{ product.field_old }}</del></span>
                    </div>
                    <p>{{ product_entity.body.summary }}</p>
                  <div class=\"row my-4 fix-variations\">{{ product.variations}}
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </section>
{% endif %}

<!--tab start-->
<section class=\"grey-bg\">
  <div class=\"container\">
    <div class=\"row\">
      <div class=\"col-md-12\">
        <div class=\"tab {% if shop_detail != 'style1'%} text-center {% endif %}\">
          <!-- Nav tabs -->
          <nav>
            <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\"> <a class=\"nav-item nav-link active\" id=\"nav-tab1\" data-toggle=\"tab\" href=\"#tab3-1\" role=\"tab\" aria-selected=\"true\">{{ 'Description'|t }}</a>
              <a class=\"nav-item nav-link\" id=\"nav-tab2\" data-toggle=\"tab\" href=\"#tab3-2\" role=\"tab\" aria-selected=\"false\">{{ product.field_additional_information['#title'] }}</a>
              <a class=\"nav-item nav-link\" id=\"nav-tab3\" data-toggle=\"tab\" href=\"#tab3-3\" role=\"tab\" aria-selected=\"false\"> {{'Reviews'|t}} ({{ comment_count }})</a>
            </div>
          </nav>
          <!-- Tab panes -->
          <div class=\"tab-content {% if shop_detail != 'style1'%} text-left {% endif %}\">
            <div role=\"tabpanel\" class=\"tab-pane fade show active\" id=\"tab3-1\">
             {{ product.body }}
            </div>
            <div role=\"tabpanel\" class=\"tab-pane fade {% if shop_detail != 'style1'%} text-left {% endif %}\" id=\"tab3-2\">
              {{ product.field_additional_information }}
            </div>
            <div role=\"tabpanel\" class=\"tab-pane fade update-cmt {% if shop_detail != 'style1'%} text-left {% endif %}\" id=\"tab3-3\">
              {{ product.field_product_comment  }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!--tab end-->
<!--product start-->
<section>
  <div class=\"container\">
    <div class=\"row\">
      <div class=\"col-lg-8 col-md-10 mr-auto\">
        <div class=\"section-title\">
          <h2 class=\"title\">{{'Related'|t}} <span>{{'Products'|t}}</span></h2>
          
        </div>
      </div>
    </div>
    <div class=\"row\">
      <div class=\"col-md-12\">
        
           {#{ drupal_view('shop_related_products', 'shop_related_products_',product.field_categories.0['#options'].entity.tid.value) }#}
          {{ drupal_view('relate_product_api', 'relate_product_api_',product.field_categories.0['#options'].entity.tid.value) }}
      
      </div>
    </div>
  </div>
</section>", "themes/oshop/templates/node/commerce-product--full.html.twig", "/var/www/html/themes/oshop/templates/node/commerce-product--full.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 1, "if" => 7, "for" => 20);
        static $filters = array("length" => 19, "escape" => 24, "t" => 107);
        static $functions = array("file_url" => 2, "getUrlByImageStyle" => 10, "drupal_view" => 145);

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'for'],
                ['length', 'escape', 't'],
                ['file_url', 'getUrlByImageStyle', 'drupal_view']
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
